<script setup lang="ts">
interface Props {
  modelValue?: boolean
  label?: string
  flexible?: boolean
  right?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: 'switch',
  flexible: false,
  right: false,
  reverse: false,
})

const emit = defineEmits(['update:modelValue'])

const toggled = ref(false)

watch(
  () => props.modelValue,
  (newVal) => {
    toggled.value = newVal
  },
)

const toggle = () => {
  toggled.value = !toggled.value
  emit('update:modelValue', toggled.value)
}

onMounted(() => {
  toggled.value = props.modelValue
})
</script>

<template>
  <div
    :class="{
      'flex items-center justify-between': flexible,
    }"
    :title="label"
  >
    <div
      v-if="label"
      :class="{
        'order-2': reverse,
        'order-1': !reverse,
        'ml-3': reverse,
      }"
      class="flex flex-grow flex-col"
    >
      <span
        id="availability-label"
        class="text-sm font-medium text-gray-900 dark:text-gray-100"
      >{{ label }}</span>
    </div>
    <button
      type="button"
      :class="[
        toggled ? '!bg-primary-600' : 'bg-gray-200 dark:bg-gray-700',
        flexible ? '' : 'mt-2',
        flexible && label && !reverse ? 'ml-3' : '',
        right ? '!flex ml-auto' : '',
        { 'order-1': reverse },
        { 'order-2': !reverse },
      ]"
      class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-primary-700 dark:focus:ring-offset-gray-900"
      role="switch"
      :aria-checked="toggled"
      @click="toggle"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        :class="toggled ? 'translate-x-5' : 'translate-x-0'"
        class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-900"
      >
        <span
          :class="
            toggled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in'
          "
          class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          aria-hidden="true"
        >
          <svg class="toggle-disabled h-3 w-3 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span
          :class="
            toggled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out'
          "
          class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          aria-hidden="true"
        >
          <svg class="toggle-enabled h-3 w-3 text-primary-600" fill="currentColor" viewBox="0 0 12 12">
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </button>
  </div>
</template>
