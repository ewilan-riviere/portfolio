<script lang="ts" setup></script>

<template>
  <header class="pointer-events-none relative z-50 flex flex-col" style="height:var(--header-height);margin-bottom:var(--header-mb)">
    <div class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" /><div class="sm:px-8 top-0 order-last -mb-3 pt-3" style="position:var(--header-position)">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="top-[var(--avatar-top,theme(spacing.3))] w-full" style="position:var(--header-inner-position)">
              <div class="relative">
                <div class="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10" style="opacity:var(--avatar-border-opacity, 0);transform:var(--avatar-border-transform)" />
                <nuxt-link aria-label="Home" class="block h-16 w-16 origin-left pointer-events-auto" style="transform:var(--avatar-image-transform)" to="/">
                  <img alt="" sizes="4rem" decoding="async" data-nimg="1" class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16" style="color:transparent" width="512" height="512">
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
      <div class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full" style="position:var(--header-inner-position)">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="relative flex gap-4">
                <div class="flex flex-1" />
                <div class="flex flex-1 justify-end md:justify-center">
                  <div class="pointer-events-auto md:hidden" data-headlessui-state="">
                    <button id="headlessui-popover-button-:Rqb6:" class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="">
                      Menu<svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"><path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </button>
                  </div><nav class="pointer-events-auto hidden md:block">
                    <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      <li>
                        <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/about">
                          About
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/articles">
                          Articles
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/projects">
                          Projects
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/speaking">
                          Speaking
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/uses">
                          Uses
                        </nuxt-link>
                      </li>
                    </ul>
                  </nav>
                </div><div class="flex justify-end md:flex-1">
                  <div class="pointer-events-auto">
                    <button type="button" aria-label="Toggle dark mode" class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                      <svg-icon name="sun" class="h-6 w-6 text-zinc-100 hover:text-zinc-200 transition-colors" />
                      <svg-icon name="moon" class="hidden h-6 w-6 text-zinc-100 hover:text-zinc-200 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div style="height:var(--content-offset)" />
</template>

<style scoped></style>
