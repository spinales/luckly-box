<template>
    <Contact />

    <h1 class="p-4 text-5xl font-light">Estaciones de Lucky Box</h1>
    <div class="flex flex-1 w-full justify-center justify-items-center" style="height: 600px;">
      
      <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        
        class="w-3/4"
      >
        <GMapCluster>
          <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
          />
        </GMapCluster>
    </GMapMap>
    </div>
    

    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <!-- <iframe class="absolute inset-0" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" height="100%" frameborder="0"></iframe> -->
      <img src="../assets/contact/contact-form.jpg" class="absolute inset-0" alt="">
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Dirreción</h2>
          <p class="mt-1">Av. Independencia esquina, Av. Luperón, Santo Domingo</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
          <a class="text-palet3 leading-relaxed">servicios@luckybox.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Teléfono</h2>
          <p class="leading-relaxed">(+1) 829-665-3836</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contáctanos</h2>
      <p class="leading-relaxed mb-5 text-gray-600">LLena el formulario con la información requerida para contactarte.</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
        <input v-model="first" type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-palet3 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Apellido</label>
        <input v-model="last" type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-palet3 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-palet3 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Teléfono</label>
        <input v-model="phone" type="text" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-palet3 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button @click="sendData()" class="text-palet2 bg-palet3 border-0 py-2 my-4 px-6 focus:outline-none hover:text-palet1 rounded text-lg">Enviar</button>
      <p class="text-xs text-gray-500 mt-3">Aseguramos que su información no será compartida con nadie más.</p>
    </div>
  </div>
</section>
  <BottomNav />
</template>

<script>
import BottomNav from '../components/BottomNav.vue';
import Contact from '../components/Contact.vue';
import { addPerson } from '../data/funcs';

export default {
    components: { BottomNav },
    name: "Contactview",
    data() {
        return {
          name: '',
          phone: '',
          last: '',
          email: '',
          center: {lat: 18.449129, lng: -69.926357},
          markers: [
            {
              position: {
                lat: 51.093048, lng: 6.842120
              },
            }, // Along list of clusters
          ]
        };
    },
    mounted() {
    },
    methods: {
      sendData() {
        addPerson(this.first, this.last, this.email, this.phone)
        this.$router.push("/");
      }
    },
    components: { Contact }
};
</script>