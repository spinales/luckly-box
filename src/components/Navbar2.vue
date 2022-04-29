<template>
  <div class="bg-gray-900">
    <div
      class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div
        class="relative flex items-center justify-between lg:justify-center lg:space-x-16"
      >
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Conocenos</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Identidad</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Alianzas</a
            >
          </li>
        </ul>
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <svg fill="currentColor" class="w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 302.3c0 35.29-28.99 63.91-64.28 63.91c-38.82 0-88.7-22.75-122.4-40.92c18.17 33.7 40.92 83.57 40.92 122.4c0 35.29-28.61 63.91-63.91 63.91c-18.1 0-34.45-7.52-46.09-19.63C244.6 504.3 228 512 209.7 512c-35.29 0-63.91-28.99-63.91-64.28c0-38.82 22.75-88.7 40.92-122.4c-33.7 18.17-83.57 40.92-122.4 40.92c-35.29 0-63.91-28.61-63.91-63.91c0-18.1 7.52-34.45 19.63-46.09C7.676 244.6 0 228 0 209.7c0-35.29 28.99-63.91 64.28-63.91c38.82 0 88.7 22.75 122.4 40.92C168.5 152.1 145.8 103.1 145.8 64.28c0-35.29 28.61-63.91 63.91-63.91c18.1 0 34.45 7.52 46.09 19.63C267.4 7.676 283.1 0 302.3 0c35.29 0 63.91 28.99 63.91 64.28c0 38.82-22.75 88.7-40.92 122.4c33.7-18.17 83.57-40.92 122.4-40.92c35.29 0 63.91 28.61 63.91 63.91c0 18.1-7.52 34.45-19.63 46.09C504.3 267.4 512 283.1 512 302.3z"/></svg>
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >Luckly Box</span
          >
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Informes</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >3Rs</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Sign up"
              title="Sign up"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Contacto</a
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                      class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                      >Company</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Product</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Features</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Pricing</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >About us</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Sign in"
                      title="Sign in"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Sign in</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>