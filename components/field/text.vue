<script setup lang="ts">
interface Props {
  modelValue?: string
  label?: string
  name?: string
  placeholder?: string
  type?:
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  required?: boolean
  multiline?: boolean
  minlength?: number
  maxlength?: number
  disabled?: boolean
  autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  label: undefined,
  name: 'field',
  placeholder: undefined,
  type: 'text',
  required: false,
  multiline: false,
  minlength: 0,
  maxlength: 0,
  disabled: false,
  autocomplete: undefined,
})

const emit = defineEmits(['update:modelValue'])

const value = computed<string>({
  get() {
    return props.modelValue as string
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-red-600 dark:text-red-500"
      >*</span>
    </label>
    <div class="mt-1">
      <textarea
        v-if="multiline"
        :id="name"
        v-model="value"
        :name="name"
        :placeholder="placeholder"
        rows="4"
        :minlength="minlength > 0 ? minlength : ''"
        :maxlength="maxlength > 0 ? maxlength : ''"
        :autocomplete="autocomplete"
        class="field"
        :required="required"
      />
      <input
        v-else
        :id="name"
        v-model="value"
        :type="type ? type : 'text'"
        :name="name"
        class="field"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :aria-describedby="`${name}-description`"
        :required="required"
      >
    </div>
    <div
      id="email-description"
      class="mt-2 text-sm text-gray"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.field {
  @apply block w-full rounded-md border-gray-300 placeholder-gray-500 border shadow-sm text-gray-900;
  @apply focus:border-primary-600 focus:ring-primary-600;
  /* @apply dark:border-gray-700 dark:bg-gray-700 dark:text-white sm:text-sm dark:placeholder-gray-100; */
}

textarea {
  @apply p-3;
}
</style>
