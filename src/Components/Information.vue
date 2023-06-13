<template>
    <section class="information__section">
        <div class="container">
            <div class="information__title">
                <h1>Davlatlar</h1>
            </div>
            <div class="information__content">
                <div class="info__cards">
                    <div class="info__card" v-for="item in countries">
                        <div class="card__header">
                            <img src="../Assets/logo.jpg" alt="">
                        </div>
                        <div class="card__body">
                            <h1>{{ item.title }}</h1>
                            <p>{{ item.desc }}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore blanditiis corporis deserunt obcaecati possimus incidunt vitae maxime eligendi veritatis aspernatur tempora quo facilis quasi perspiciatis porro fugit, odio excepturi assumenda?</p>
                        </div>
                        <div class="card__footer">
                            <RouterLink :to="'/cities/' + item.id">
                                <button>Batafsil...</button>
                            </RouterLink>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        countries: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .information__section {
        .information__title {
            font-size: 2.481792717086835vh;
            text-align: center;
            margin-bottom:  2.5210084033613445vh;
        }
        .info__cards {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.3020833333333333vw;
            .info__card {
                width: 30%;
                box-shadow: 0 0 0.3255208333333333vw 0 #11009E;
                border-radius: 0.3255208333333333vw;
                height: 90.04481792717087vh;
                transition: all .2s ease-in-out;
                cursor: pointer;
                &:hover {
                box-shadow: 0 0 0.7255208333333333vw 0 #11009E;
                transition: all .2s ease-in-out;
                }
            }
            .card__body {
                padding: 1.0416666666666667vw;
                height: 28.204481792717086vh;
                h1 {
                    font-size: 2.8011204481792715vh;
                }
                p {
                    font-size: 2.2408963585434174vh;
                }
            }
            .card__footer {
                text-align: end;
                padding: 1.0416666666666667vw;
                button {
                    width: 7.8125vw;
                    height: 4.481792717086835vh;
                    font-size: 2.0408963585434174vh;
                    border-radius: 1.4005602240896358vh;
                    border: 1px solid #11009E;
                    background-color: #11009E;
                    color: white;
                    box-shadow: 0 0 5px 0 #11009E;
                    cursor: pointer;
                }
            }
            img {
                width: 100%;
                border-radius: 0.3255208333333333vw 0.3255208333333333vw 0 0;
            }
        }
    }
</style>