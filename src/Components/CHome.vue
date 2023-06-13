<template>
    <section class="home__section">
            <div class="container">
                <swiper :navigation="true" draggable="true" :modules="modules" class="mySwiper">
                    <swiper-slide class="visa__image" v-for="item in informations">
                        <img :src="item.image" alt="" class="swiper__image">
                        <div class="swiper__content">
                            <h1>{{ item.title }}</h1>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
            
        };
    },
    props: {
        informations: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss">
.mySwiper {
    height: 80vh !important;
    font-size: 2.2408963585434174vh;
    padding: 0 4rem;
}

.swiper__content {
    padding: 2.166666666666667vw;
    background-color: rgba(128, 128, 128, 0.881);
    color: white;
    border-radius: 0.6510416666666666vw;
}

.swiper__image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.166666666666667vw 7vw;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-next, .swiper-button-prev {
    background-color: #11009E;
    width: 4.166666666666667vw;
    box-shadow: 0 0 10px 0 #11009E;
    border-radius: 5px;
    height: 5vh;
    &::after {
        font-size:2.4005602240896358vh !important;
        color: white;
    }
}

</style>