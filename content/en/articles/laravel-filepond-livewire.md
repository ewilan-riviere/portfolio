---
title: Laravel FilePond with Livewire
description:
category: php
tags: [php, laravel, filepond, blade, livewire]
publishedAt: 2023-04-27
# updatedAt: 2023-04-26
draft: true
legend: Unsplash
origin: https://unsplash.com/photos/XAkPN7aEGJM
---

## About FilePond

[FilePond](https://pqina.nl/filepond/) is a JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience. When you want to build an image upload component in your Laravel application with Blade and [Livewire](https://laravel-livewire.com/), FilePond is a great choice.

::alert{type=info}
I use [Filament](https://filamentphp.com/) as admin panel, and Filament use FilePond to upload images. This article offer to create a component to upload images with FilePond and Livewire, to upload files and retrieve them into Filament. And I use [Tailwind CSS](https://tailwindcss.com/) for styling, but you can use any CSS framework or vanilla CSS.
::

Of course, if you want to build a native file upload component, you could use [Alpine.js](https://alpinejs.dev/) but you will have to handle all upload options with preview, progress, error handling, multiple files, etc. It's a **lot of work** to develop and maintain. I try to develop it... it was a nightmare.

With FilePond, you can build a great image upload component in a few minutes. The main problem is documentation is not very clear and there is no example with Livewire. So, I will show you how to do it.

::alert{type=warning}
FilePond documentation isn't really user-friendly, with few examples. I really advise to check this library with TypeScript to have a better understanding of the API. In this article, we will use Alpine.js and FilePond CDN to create a component without any dependency, but you could create an `Alpine.data` component to have a better code organization and reusability.
::

### Why Livewire?

I use Livewire to build my components because it's a great library to build _interactive_ UIs without writing JavaScript. You could just write PHP and create _async_ components, it's just amazing.

### And Alpine.js?

You could write vanilla JavaScript if you want, I use Alpine.js because it's a great library to write _declarative_ JavaScript. It's a great companion to Livewire, and it's very lightweight.

### Source code

If you want to have final result, without details, you can find the source code of this gist on [GitHub](https://gist.github.com/ewilan-riviere/dfca491def1bb5aabf70e1649518b5f1).

::alert{type=warning}
Don't forget to add `@stack` directives to your root Blade file, usually `resources/views/layouts/app.blade.php`. See [Let's start](#lets-start) section for more details.
::

## Let's start

First, we will create a new Blade component with the command:

```bash
php artisan make:command Field/Upload
```

Now you will have two files, PHP file in `app/View/Components/Field/Upload.php` and Blade file in `resources/views/components/field/upload.blade.php` (if you have default `views.paths` in your `config/view.php`).

Before anything, you have to add [Blade directives `@stack`](https://laravel.com/docs/10.x/blade#stacks) to your root Blade file, usually `resources/views/layouts/app.blade.php`:

```html [resources/views/layouts/app.blade.php]
<head>
  <!-- ... -->
  @stack('head')
</head>

<body>
  <!-- ... -->
  @stack('scripts')
</body>
```

Now we can push (only once) FilePond CDN to our `head` and after `body` sections:

```html [resources/views/components/field/upload.blade.php]
@pushOnce('head')
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet" />
@endPushOnce

<div>
  <!-- Future FilePond component -->
</div>

@pushOnce('scripts')
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>
@endPushOnce
```

And now, FilePond is available, we can build our component:

```html [resources/views/components/field/upload.blade.php]
<div
  class="relative"
  wire:ignore
  x-cloak
  x-data="{
    model: @entangle($attributes->whereStartsWith('wire:model')->first()),
    isMultiple: {{ $multiple ? 'true' : 'false' }},
    current: undefined,
    currentList: [],

    async URLtoFile(path) {},
  }"
  x-init="async () => {}"
></div>
```

Into PHP file, we will add some properties:

```php [app/View/Components/Field/Upload.php]
<?php

namespace App\View\Components\Field;

use Illuminate\View\Component;
use Illuminate\View\View;

class UploadFile extends Component
{
    public function __construct(
        public string $name = 'file',
        public bool|int $multiple = false,
        public bool|int $validate = true,
        public bool|int $preview = true,
        public bool|int $required = false,
        public bool|int $disabled = false,
        public int $previewMax = 200,
        public array|string $accept = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
        public string $size = '2MB',
        public int $number = 10,
        public string $label = '',
        public string $sizeHuman = '',
        public array|string $acceptHuman = [],
    ) {
    }

    public function render(): View|string
    {
        return view('components.field.upload-file');
    }
}
```

So, in any Livewire form, you can use this component like this:

```html
<x-field.upload-file
  name="avatar"
  wire:model="avatar"
  multiple
  validate
  preview
  required
  disabled
  preview-max="200"
  accept="image/png, image/jpeg"
  size="4mb"
  number="4"
/>
```

- `name="avatar"` is the name of the input.
- `wire:model="image"` is the Livewire model.
- `multiple` is a boolean to allow multiple files.
- `validate` is a boolean to validate files.
- `preview` is a boolean to show preview.
- `required` is a boolean to make the input required.
- `disabled` is a boolean to disable the input.
- `preview-max="200"` is the maximum height of the preview.
- `accept="image/png, image/jpeg"` is the accepted MIME types.
- `size="4mb"` is the maximum size of the file.
- `number="4"` is the maximum number of files.

::alert{type=info}
We will set these options into FilePond to interact directly with the component.
::

### Handle props

Before send data to Alpine.js, we will handle some props:

```php [app/View/Components/Field/Upload.php]
public function render(): View|string
{
    // Set boolean values
    if (! $this->multiple) {
        $this->multiple = 0;
    }

    if (! $this->validate) {
        $this->validate = 0;
    }

    if (! $this->preview) {
        $this->preview = 0;
    }

    if (! $this->required) {
        $this->required = 0;
    }

    if (! $this->disabled) {
        $this->disabled = 0;
    }

    // Prepare accept files to JSON
    if (is_string($this->accept)) {
        $this->accept = explode(',', $this->accept);
    }

    $this->accept = array_map('trim', $this->accept);
    $this->accept = array_filter($this->accept);
    $this->accept = array_unique($this->accept);
    $this->accept = array_values($this->accept);
    $this->accept = array_map('strtolower', $this->accept);
    $fileTypes = $this->accept;
    $this->accept = json_encode($this->accept);

    // Set size human for UI
    $this->sizeHuman = $this->size;

    // Prepare files types for UI
    foreach ($fileTypes as $type) {
        $new = explode('/', $type);

        if (array_key_exists(1, $new)) {
            $this->acceptHuman[] = ".{$new[1]}";
        }
    }

    $this->acceptHuman = implode(', ', $this->acceptHuman);

    return view('components.field.upload-file');
}
```

### Add some HTML

Now, we can add some HTML to our component:

```html [resources/views/components/field/upload-file.blade.php]
<div class="relative" wire:ignore x-cloak x-data="...">
  @if ($label)
  <div class="flex items-center justify-between">
    <label
      class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
      for="{{ $name }}"
    >
      {{ $label }} @if ($required)
      <span class="text-red-500" title="Required">*</span>
      @endif
    </label>
    <div class="text-xs text-gray-400">Size max: {{ $sizeHuman }}</div>
  </div>
  @endif
  <div class="flex items-center justify-between text-xs text-gray-400">
    <div>Formats: {{ $acceptHuman }}</div>
    <div>
      {{ $multiple ? 'Multiple' : 'Single' }} @if ($multiple)
      <span>({{ $number }} files max)</span>
      @endif
    </div>
  </div>
  <div class="mt-5">
    <input type="file" x-ref="{{ $attributes->get('ref') ?? 'input' }}" />
  </div>
  @error('image')
  <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
  @enderror
</div>
```

::alert{type=info}
FilePond will replace the input `<input type="file" x-ref="{{ $attributes->get('ref') ?? 'input' }}" />`.
::

## Add FilePond

Now we can add FilePond to our component. But first, we need to add global method. I use the `window` variable `window.appUrlStorage`, I register it globally this variable in root Blade view.

```html [resources/views/app.blade.php]
<script>
  window.appUrlStorage = "{{ config('app.url').'/storage' }}";
</script>
```

### Retrieve uploaded files

We just add a method to retrieve uploaded files, `URLtoFile()`.

```html [resources/views/components/field/upload-file.blade.php]
<div
  class="relative"
  wire:ignore
  x-cloak
  x-data="{
      model: @entangle($attributes->whereStartsWith('wire:model')->first()),
      isMultiple: {{ $multiple ? 'true' : 'false' }},
      current: undefined,
      currentList: [],

      async URLtoFile(path) {
          let url = `${window.appUrlStorage}/${path}`;
          let name = url.split('/').pop();
          const response = await fetch(url);
          const data = await response.blob();
          const metadata = {
              name: name,
              size: data.size,
              type: data.type
          };
          let file = new File([data], name, metadata);
          return {
              source: file,
              options: {
                  type: 'local',
                  metadata: {
                      name: name,
                      size: file.size,
                      type: file.type
                  }
              }
          }
      }
  }"
  x-init="async () => {}"
>
  ...
</div>
```

The method `URLtoFile()` will fetch the file from the storage and return a FilePond object to display it. The user can delete it to upload a new file.

### Add FilePond options

We will add File some options to FilePond:

```html [resources/views/components/field/upload-file.blade.php]
<div
  class="..."
  x-data="{
      ...
  }"
  x-init="async () => {
  let picture = model
  let files = []
  let exists = []
  if (model) {
      if (isMultiple) {
          currentList = model.map((picture) => `${window.appUrlStorage}/${picture}`);
          await Promise.all(model.map(async (picture) => exists.push(await URLtoFile(picture))))
      } else {
          if (picture) {
              exists.push(await URLtoFile(picture))
          }
      }
  }
  files = exists
  let modelName = '{{ $attributes->whereStartsWith('wire:model')->first() }}'

  const notify = () => {
      new Notification()
          .title('File uploaded')
          .body(`You can save changes!`)
          .success()
          .seconds(1.5)
          .send()
  }

  const pond = FilePond.create($refs.{{ $attributes->get('ref') ?? 'input' }});
  pond.setOptions({
      allowMultiple: {{ $multiple ? 'true' : 'false' }},
      server: {
          process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
              @this.upload(modelName, file, load, error, progress)
          },
          revert: (filename, load) => {
              @this.removeUpload(modelName, filename, load)
          },
          remove: (filename, load) => {
              @this.removeFile(modelName, filename.name)
              load();
          },
      },
      allowImagePreview: {{ $preview ? 'true' : 'false' }},
      imagePreviewMaxHeight: {{ $previewMax ? $previewMax : '256' }},
      allowFileTypeValidation: {{ $validate ? 'true' : 'false' }},
      acceptedFileTypes: {{ $accept ? $accept : 'null' }},
      allowFileSizeValidation: {{ $validate ? 'true' : 'false' }},
      maxFileSize: {!! $size ? "'" . $size . "'" : 'null' !!},
      maxFiles: {{ $number ? $number : 'null' }},
      required: {{ $required ? 'true' : 'false' }},
      disabled: {{ $disabled ? 'true' : 'false' }},
      onprocessfile: () => notify()
  });
  pond.addFiles(files)

  pond.on('addfile', (error, file) => {
      if (error) {
          console.log('Oh no');
          return;
      }
  });
}"
>
  ...
</div>
```
