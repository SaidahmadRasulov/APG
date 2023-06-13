<template>
    <div>
        <Information :countries="countries" />
    </div>
</template>
<script>
import Information from '../Components/Information.vue'
export default {  
    props: {
        countries: {
            type: Array,
            required: true
        }
    },
    components: {
        Information
    }
}
</script>
<style lang="">
    
</style>