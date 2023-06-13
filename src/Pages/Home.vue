<template>
    <div>
        <CHome :informations="informations" />
        <FilterC :visas="visas" @country="handleSet" @tour="handleTour" />
        <Information :countries="countries" />
    </div>
</template>
<script>
import CHome from '../Components/CHome.vue';
import FilterC from '../Components/FilterC.vue';
import Information from '../Components/Information.vue';

export default {
    components: { CHome, FilterC, Information },
    props: {
        informations: {
            type: Array,
            required: true
        },
        visas: {
            type: Array,
            required: true
        },
        countries: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleSet(val) {
            this.$emit('country', val)
        },
        handleTour(val) {
            this.$emit('tour', val)
        }
    }
}
</script>
<style lang="">
    
</style>