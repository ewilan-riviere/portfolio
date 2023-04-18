---
title: À propos
description: 'about meta description'
createdAt: 2022-11-22
test: 'test'
---

# About

Tempor ex aute laborum ad ea et ipsum magna nulla veniam irure. Eiusmod ea magna qui ipsum ex ad elit et irure eu voluptate esse. Quis deserunt velit deserunt sunt consectetur nulla fugiat non. Laboris elit cupidatat Lorem nostrud id elit.

Culpa cillum occaecat excepteur cupidatat incididunt excepteur enim tempor consectetur amet laborum pariatur pariatur. Culpa minim ipsum elit aliquip adipisicing dolor aute cupidatat labore id nostrud commodo. Reprehenderit quis ipsum tempor adipisicing amet incididunt. Velit in nostrud magna esse ad ex velit qui laboris incididunt. Tempor proident mollit dolore culpa est fugiat quis ut et nisi consequat ipsum quis. Exercitation enim tempor reprehenderit quis exercitation in officia sint nisi enim fugiat id duis.

Aliquip sit nulla sit sunt dolor cillum occaecat ex sit incididunt Lorem qui. Non veniam enim non do mollit elit qui. Eiusmod id qui tempor veniam occaecat. Nisi excepteur aliqua do ex cillum duis cillum veniam minim nisi velit in consectetur. Excepteur commodo anim culpa sit nisi reprehenderit. Commodo minim quis elit sint aute excepteur dolore nostrud aliqua magna tempor non irure.

```ts [Vue script]
import { useMainStore } from '~~/store/main'

const { projects, historyItems } = useMainStore()
const { findAll } = useMarkdownContent()
const articles = findAll()

const articlesRef = ref<HTMLElement>()
useAnimate(articlesRef)
```

```javascript
export default () => {
  console.log('Code block')
}
```

`alert`

::alert{type="info"}
Check out an **info** alert with `code` and a [link](/).
::

::alert{type="success"}
Check out a **success** alert with `code` and a [link](/).
::

::alert{type="warning"}
Check out a **warning** alert with `code` and a [link](/).
::

::alert{type="danger"}
Check out a **danger** alert with `code` and a [link](/).
::
