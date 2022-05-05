<template>
    <div class="sticky bottom-0 bg-palet1 p-4 flex justify-center">
      <p class="text-semibold text-md mx-6 text-palet4">Si usted ya se suscribió, siga disfrutando de nuestro contenido <a class="text-palet3 underline" href="https://instagram.com/luckybox_rd?igshid=YmMyMTA2M2Y=">Link</a> o de lo contrario </p>
      <router-link to="/subscribe"><button class="bg-palet3 text-sm px-4 py-1 text-white hover:text-palet2"> SUSCRÍBASE AQUÍ </button></router-link>
	</div>
</template>

<script>
export default {
    name: 'Bottomnav',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>