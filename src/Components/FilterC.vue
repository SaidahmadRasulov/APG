<template>
    <section class="filter__section">
        <div class="container">
            <div class="filter__content">
                <div class="filter__navbar">
                    <div class="selects">
                        <div class="country__select">
                    <h1>Davlatlar:</h1>
                            <select id="select" ref="select" @change="setState">
                                <option value="">Barchasi</option>
                                <option value="kanada">Kanada</option>
                                <option value="finlandiya">Finlandiya</option>
                                <option value="serbiya">Serbiya</option>
                                <option value="vengriya">Vengriya</option>
                            </select>
                        </div>
                        <div class="tour__select">
                            <h1>Visa Turi:</h1>
                            <select id="selected" ref="selectTwo" @change="setTour">
                                <option value="">Barcha Turi</option>
                                <option value="Ish">Ish Turi</option>
                                <option value="turist">Turist Turi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Boriw Shahri</th>
                            <th>Visa Turi</th>
                            <th>Ma'lumotlar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in visas" v-if="visas.length > 0">
                        <tr>
                            <td style="text-transform: uppercase;">{{ item.city }}</td>
                            <td>{{ item.tour }}</td>
                            <td class="flex__inital">
                                <p>{{ item.desc }}</p>
                            </td>
                            <td>
                                <RouterLink :to="'/document/' + item.id">
                                    <button class="btfs__btn">Batafsil...</button>
                                </RouterLink>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr style="text-align: center;">
                            <h1>Not Date</h1>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';


export default {
    props: {
        visas: {
            type: Array,
            required: true
        }
    },
    methods: {
        setState() {
            this.$emit("country", this.$refs.select.value);
        },
        setTour() {
            this.$emit("tour", this.$refs.selectTwo.value);
            // console.log(this.$refs.selectTwo.value)
        }
    },
    components: { RouterLink }
}
</script>
<style lang="scss">
.filter__section {
    padding: 4.481792717086835vh 0;
}

.filter__content {
    width: 90%;
    margin: 0 auto;

    .btfs__btn {
        padding: .5rem;
        font-size: 1.1rem;
        border-radius: 5px;
        border: 1px solid #11009E;
        color: white;
        background-color: #11009E;
        box-shadow: 0 0 5px 0 #11009E;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            color: #11009E;
        }
    }

    .filter__navbar {
        margin: 2.2408963585434174vh 0;
        font-size: 2.2408963585434174vh;
        display: flex;
        align-items: center;
    }

    .custom-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 2.2408963585434174vh;
        text-align: center;
    }

    .custom-table thead th {
        background-color: #f5f5f5;
        color: #333;
        font-weight: bold;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    .custom-table tbody td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .custom-table tbody tr:last-child td {
        border-bottom: none;
    }

    .custom-table tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    .custom-table tbody tr:hover {
        background-color: #f5f5f5;
    }
}

.selects {
    display: flex;
    align-items: center;
    gap:  3rem;
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}

#select, #selected {
    width: 13.020833333333334vw;
    height: 5.882352941176471vh;
    padding: 0 1.0416666666666667vw;
    border-radius: 0.3255208333333333vw;
    outline: none;
    border: none;
    box-shadow: 0 0 0.3255208333333333vw 0 gray;
    cursor: pointer;
    font-size: 2.2408963585434174vh;
}
</style>