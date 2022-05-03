<template>
    <section class="text-gray-700 mx-auto" v-for="item in items" :key="item.id">
    <div class="container flex flex-col items-center px-5 py-8 mx-auto lg:px-24">
      <div class="flex flex-wrap py-8 md:flex-nowrap justify-start w-full">
        <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0 w-1/5">
          <strong class="flex text-3xl font-thin leading-none text-left text-thin lg:text-4xl" v-html="item.title" ></strong>
          <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">Concepto</span>
        </div>
        <div class="prose md:flex-grow prose-md w-4/5">
          <p v-html="item.body"></p>
        </div>
      </div>
    
  </div>
</section>

</template>

<script>
export default {
    name: 'Glossary',

    data() {
        return {
            items: [
                {title: "Medio Ambiente", body: "Tb. medioambiente.<br/>1. m. medio (‖ conjunto de circunstancias exteriores a un ser vivo)."},
                {title: "Biodegradable", body: `e bio- y degradable.
                <br/>1. adj. Biol. Dicho de una sustancia: Que puede ser degradada por acción biológica.`},
                {title: "Residuos", body: `Del lat. residuum.
                <br>1. m. Parte o porción que queda de un todo.
                <br>2. m. Cualquier producto o sustancia que se desecha tras haber cumplido con su función.
                <br>3. m. Material que queda como inservible después de haber realizado un trabajo u operación.U. m. en pl.`},
                {title: "Sólido", body: `Del lat. solĭdus.
                <br>1. adj. Firme, macizo, denso y fuerte.
                <br>2. adj. Dicho de un cuerpo: Que, debido a la gran cohesión de sus moléculas, mantiene forma y volumen constantes. U. t. c. s. m.`},
                {title: "Comerciantes o distribuidores", body: `Empresas dedicadas a la distribución, mayorista o minorista, de productos envasados (tiendas, mercados, supermercados, etc), tanto a través de canales físicos como online.`},
                {title: "Recicladores", body: "Empresas que transforman los residuos hasta conseguir un grado de terminación del material que sea apto para sustituir una materia prima o, dicho de otro modo, que tenga un valor de mercado."},
                {title: "Reutilización", body: "Cualquier acción mediante la cual productos o componentes de productos que han cumplido su función original se utilizan de nuevo con la misma finalidad para la que fueron concebidos, evitando de este modo que se conviertan en residuos."}
            ]
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