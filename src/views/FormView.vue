<template>
  <section class="text-palet3 bg-palet1">
  <div class="container items-center px-5 py-12 lg:px-20  mx-auto">
    <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0 shadow-lg">
          <div class="space-y-6">
            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-neutral-600"> Nombre </label>
              <div class="mt-1">
                <input v-model="nombre" id="nombre" name="nombre" type="text" required placeholder="Su nombre" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-neutral-600"> Apellido </label>
              <div class="mt-1">
                <input v-model="apellido" id="apellido" name="apellido" type="text" required placeholder="Su apellido" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-neutral-600"> Edad </label>
              <div class="mt-1">
                <input v-model="edad" id="edad" name="edad" type="number" required placeholder="Edad" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-neutral-600"> Email </label>
              <div class="mt-1">
                <input v-model="email" id="email" name="email" type="email" autocomplete="email" required placeholder="Su Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-neutral-600"> Telefono </label>
              <div class="mt-1">
                <input v-model="telefono" id="telefono" name="telefono" type="text" required="" placeholder="809-123-4567" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div>
              <button @click="sendData()" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-palet2 transition duration-500 ease-in-out transform bg-palet3 hover:bg-palet2 rounded-xl hover:text-palet3 focus:outline-none focus:ring-2 focus:ring-offset-2">Enviar</button>
            </div>
          </div>        
    </div>
  </div>
</section>
</template>

<script>
import {addPersonSubscribeToCourses} from "../data/funcs"

export default {
    name: 'Formview',

    data() {
        return {
            email: "",
            nombre: "",
            telefono:"",
            edad: '',
            apellido: ""
        };
    },

    mounted() {
        
    },

    methods: {
        sendData() {
            addPersonSubscribeToCourses(this.nombre, this.apellido, this.email, this.telefono, this.edad);
            this.$router.push("/")
        }
    },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>