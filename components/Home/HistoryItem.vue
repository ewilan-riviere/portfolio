<script lang="ts" setup>
import type { HistoryItem } from '~/types/history-item'

interface Props {
  item: HistoryItem
  type?: 'work' | 'education'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'education',
})

const dateBegin = computed(() => new Date(props.item.dateBegin))
const dateEnd = computed(() => props.item.dateEnd ? new Date(props.item.dateEnd) : undefined)
</script>

<template>
  <a
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-md"
  >
    <div
      class="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0"
      :style="`background-color: ${item.color}`"
    >
      <SvgIcon
        :name="item.icon"
        class="h-7 w-7 text-gray-50"
      />
    </div>
    <dl class="flex flex-col flex-auto flex-wrap gap-x-2 gap-y-2">
      <div>
        <dt class="sr-only">
          Company
        </dt>
        <dd class="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100 flex justify-between">
          <span>{{ $t(`history-items.${item.slug}.title`) }}</span>
        </dd>
      </div>
      <div class="flex">
        <dt class="sr-only">
          Role
        </dt>
        <dd class="text-xs text-zinc-500 dark:text-zinc-400">
          {{ $t(`history-items.${item.slug}.role`) }}
        </dd>
        <dt class="sr-only">
          Date
        </dt>
        <dd
          v-if="type === 'work'"
          class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label="2019 until Present"
        >
          <time :datetime="dateBegin.toString()">{{ dateBegin.getFullYear() }}</time>
          <span v-if="dateEnd && dateBegin.getFullYear() !== dateEnd.getFullYear()">
            <span aria-hidden="true">—</span>
            <time :datetime="dateEnd?.toString()">
              {{ item.isFinished ? dateEnd.getFullYear() : $t('history.present') }}
            </time>
          </span>
          <span v-if="!item.isFinished"><span aria-hidden="true">—</span>{{ $t('history.present') }}</span>
        </dd>
      </div>
      <div
        v-if="(item.experienceType === 'school' || item.experienceType === 'vocational')"
        class="flex"
      >
        <dt class="sr-only">
          Type
        </dt>
        <dd class="text-xs text-zinc-500 dark:text-zinc-400">
          {{ $t(`history.types.${item.experienceType}`) }}
        </dd>
        <dt
          v-if="type === 'education'"
          class="sr-only"
        >
          Level
        </dt>
        <dd
          v-if="type === 'education'"
          class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
        >
          {{ $t(`history-items.${item.slug}.level`) }}
        </dd>
      </div>
    </dl>
  </a>
</template>

<style scoped></style>
