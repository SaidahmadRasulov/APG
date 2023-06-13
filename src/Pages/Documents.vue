<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route)
const id = route.params.id;
</script>

<template>
    <section class="document__section">
        <div class="container">
            <div class="document__content" v-for="item in visas">
                <div v-if="item.id == id" class="flex__initial">
                    <div class="item__image">
                        <img src="../Assets/logo.jpg" alt="">
                    </div>
                    <div class="item__title">
                        <h1 style="text-transform: uppercase;">Davlat: {{ item.city }}. Visa Turi: {{ item.tour }}</h1>
                        <h3>Sizga kerak boladigon hujjatlar: {{ item.documentation }}</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati sequi alias tempora iusto sunt officiis. Aliquid blanditiis fugit et fuga delectus hic nisi nihil aperiam? Illo quos laudantium ab.</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            id: this.id
        }
    },
    props: {
        visas: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .document__section {
        height: 80vh;
        .flex__initial {
            display: flex;
            justify-content: space-between;
        }
        .item__image {
            width: 40%;
            height: 300px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .item__title {
            width: 50%;
            display: flex;
            flex-direction: column;
            line-height: 2;
            gap: 3rem;
        }
    }
</style>