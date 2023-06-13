<template>
    <header>
            <nav class="navbar">
                <div class="container">
                    <div class="navbar__top_level">
                        <div class="navbar__logo">
                            <RouterLink to="/">
                                <img src="../Assets/logo.jpg" class="nav__img" alt="">
                            </RouterLink>
                        </div>
                        <ul class="navbar__contact">
                            <li class="navbar__item">
                                <i class="bx bx-location-plus"></i>
                                Andijon sh. Milliy tiklanish kochasi.
                            </li>
                            <li class="navbar__item">
                                <i class="bx bx-phone"></i>
                                +998 (93) 988-97-97
                            </li>
                            <li class="navbar__item">
                                <i class="bx bx-envelope"></i>
                                apg.krservice@mail.ru
                            </li>
                        </ul>
                        <div class="navbar__button">
                            <RouterLink to="/contact">
                                <button class="navbar__btn">Yozilish</button>
                            </RouterLink>
                        </div>
                    </div>
                    <hr class="hr">
                </div>
                <div class="navbar__bottom_level" ref="navRef">
                    <div class="container">
                        <div class="navbar__title">
                            <RouterLink to="/" class="h1">
                                Asian power group
                            </RouterLink>
                        </div>
                        <ul class="navbar__links">
                            <li class="links__item">
                                <RouterLink to="/about">
                                    Biz Hakimizda
                                </RouterLink>
                            </li>
                            <li class="links__item">
                                <RouterLink to="/countries">
                                    Visa Davlatlari
                                </RouterLink>
                            </li>
                            <li>
                                <div class="navbar__button">
                                    <RouterLink to="/contact">
                                        <button class="navbar__btn">Yozilish</button>
                                    </RouterLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router';


export default {
    mounted() {
        let navRef = this.$refs.navRef;
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                navRef.classList.add("fixed");
            }
            else {
                navRef.classList.remove("fixed");
            }
        });
    },
    components: { RouterLink }
}
</script>
<style lang="scss">
header {
    .h1 {
        color: #11009E;
        text-transform: uppercase;
        font-size: 3.281792717086835vh;
    }
    padding: 2.2408963585434174vh 0;

    .navbar__top_level {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .navbar__contact {
            display: flex;
            align-items: center;
            gap: 1.0416666666666667vw;

            li {
                display: flex;
                align-items: center;
                gap: 0.5416666666666667vw;
            }
        }
    }

    li {
        font-size: 2.1011204481792715vh;

        i {
            color: #11009E;
        }
    }

    .navbar__button {
        button {
            padding: 0 1.3020833333333333vw;
            background: #11009E;
            widows: 9.114583333333334vw;
            height: 5.602240896358543vh;
            font-size: 2.380952380952381vh;
            color: white;
            border: 0.06510416666666667vw solid #11009E;
            border-radius:  0.3255208333333333vw;
            box-shadow: 0 0 0.6510416666666666vw 0 #11009E;
            cursor: pointer;

            &:hover {
                background-color: transparent;
                border: 0.06510416666666667vw solid #11009E;
                color: #11009E;
            }
        }
    }

    .navbar__bottom_level {
        .container {
            display: flex;
        align-items: center;
        gap: 12.0416666666666667vw;
        }
        .navbar__button {
            display: none;
        }
        ul {
            display: flex;
            align-items: center;
            gap: 5.0416666666666667vw;
        }

    }
    .navbar__logo {
        width: 6.510416666666667vw;
        height: 14.005602240896359vh;

        .nav__img {
            width: 100%;
            height: 100%;
        }
    }
}

.hr {
    margin: 2.2408963585434174vh 0;
    height:  0.1400560224089636vh;
}

.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #10009ecb;
    padding: 4.2408963585434174vh;
    z-index: 100;
    h1 {
        color: white
    }
    a {
        color: white;
    }
}

</style>