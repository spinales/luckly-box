<template>
    <Alliances />
    <logos/>
</template>

<script>
import Alliances from '../components/Alliances.vue';
import Logos from '../components/Logos.vue';

export default {
    name: "Alliancesview",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Alliances, Logos }
};
</script>
