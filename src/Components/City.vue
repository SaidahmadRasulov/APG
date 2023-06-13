<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route)
const id = route.params.id;
</script>

<template>
    <section>
        <div class="container">
            <div v-for="item in countries">
                <div v-if="item.id == id" class="item__content">
                    <div class="item__image">
                        <!-- <img :src="item.image" alt=""> -->
                        <img src="../Assets/logo.jpg" alt="">
                    </div>
                    <div class="item__title">
                        <h1>{{ item.title }}</h1>
                        <p>{{ item.desc }}. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda
                            architecto eos inventore non nostrum aperiam soluta quis debitis culpa optio odio mollitia fugit
                            harum, nemo excepturi maiores. Nihil magni, labore vero eveniet dolorem molestias corrupti
                            commodi obcaecati ex reiciendis provident quas recusandae atque laborum quisquam, quidem
                            deserunt aliquam consectetur.</p>
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
        countries: {
            type: Array,
            required: true
        }
    }
}
</script>
  
<style lang="scss">
    .item__content {
        display: flex;
        align-items: center;
        .item__image {
            width: 50%;
            img {
                width: 100%;
            }
        }
        .item__title {
            width: 40%;
            h1 {
                font-size: 3.5014005602240896vh;
                margin-bottom: 3.5014005602240896vh;
            }
            p {
                font-size: 2.5210084033613445vh;
            }
        }
    }
</style>  