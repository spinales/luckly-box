<script setup>
</script>

<template>
  <section>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="../assets/hero.jpg"
            alt="Man using a computer"
          />
        </div>

        <div class="lg:py-24">
          <h2
            class="text-3xl font-bold sm:text-4xl"
          >¿Estás listo para disfrutar y reciclar junto con Lucky Box?</h2>

          <p class="mt-4 text-gray-600">
            ¡Bienvenido! Únete a nosotros en esta gran aventura donde tientas la suerte y ayudas al medio ambiente.
            <br />Acceder a ofertas, novedades de productos, promos y muchas otras cosas más regístrate y solo disfruta
          </p>

          <router-link to="/contact"
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          >
            <span class="text-sm font-medium">Subscribirse</span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>


  <section class="flex m-12 items-center py-10 justify-center flex-col">
    <div class="w-3/5 h-96 background"></div>
    <h2 class="text-4xl font-normal old">Laborando desde el 2022</h2>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

.old{
  font-family: 'Dancing Script', cursive;
}

.background{
  background-image: url(../assets/luckly.jpg);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>