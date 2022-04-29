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

          <a
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium">Cuéntame más</span>

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
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
      />
    </div>
    <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          ¿Estás listo para disfrutar y reciclar junto con Lucky Box?
          <span class="inline-block">😆</span>
        </h2>
        <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          ¡Bienvenido! Únete a nosotros en esta gran aventura donde tientas la suerte y ayudas al medio ambiente.
          Acceder a ofertas, novedades de productos, promos y muchas otras cosas más regístrate y solo disfruta.
        </p>
        <div class="flex items-center">
          <a
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium">Cuéntame más</span>

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
          </a>
        </div>
      </div>
    </div>
  </div>


  <section class="flex m-12 items-center py-10 justify-center flex-col">
    <div class="w-3/5 h-96 background"></div>
    <h2 class="text-3xl font-normal old">Laborando desde el 2022</h2>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.old{
  font-family: 'Poppins', sans-serif;
}

.background{
  background-image: url(../assets/luckly.jpg);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>