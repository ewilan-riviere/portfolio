<template>
  <div class="w-full z-50 top-0 py-3 sm:py-5 absolute">
    <div class="container flex items-center justify-between">
      <div>
        <a href="/">
          <img
            src="https://atom.redpixelthemes.com/assets/img/logo.svg"
            class="w-24 lg:w-48"
            alt="logo image"
          />
        </a>
      </div>
      <div class="hidden lg:block">
        <ul class="flex items-center">
          <li class="group pl-6">
            <span
              @click="triggerNavItem('#about')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >About</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#services')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Services</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#portfolio')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#clients')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Clients</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#work')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Work</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#statistics')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#blog')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('#contact')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Contact</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
        </ul>
      </div>
      <div class="block lg:hidden">
        <button @click="mobileMenu = true">
          <i class="bx bx-menu text-4xl text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>
