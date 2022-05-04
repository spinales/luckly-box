<template>
    <Alliances />
    <logos/>
    <BottomNav />
</template>

<script>
import Alliances from '../components/Alliances.vue';
import BottomNav from '../components/BottomNav.vue';
import Logos from '../components/Logos.vue';

export default {
    components: { BottomNav },
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
