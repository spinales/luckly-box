<template>
    <section class="text-blue-700">
  <div class="container items-center px-5 py-12 lg:px-20">
    <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
      <div class="mt-8">
        <div class="mt-6">
          <div class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-neutral-600"> Email </label>
              <div class="mt-1">
                <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" placeholder="Su Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-neutral-600"> Nombre </label>
              <div class="mt-1">
                <input v-model="nombre" id="nombre" name="nombre" type="text" required="" placeholder="Su nombre" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              </div>
            </div>
            <div>
              <button @click="sendData()" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Subscribirme</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import {addSubscrition} from '../data/funcs';

export default {
    name: 'Subscribeview',

    data() {
        return {
            email: "",
            nombre: ""
        };
    },

    mounted() {
    },

    methods: {
        sendData() {
            addSubscrition(this.email, this.nombre);
            this.$router.push("/")
        }
    },
};
</script>

<style scoped>

</style>