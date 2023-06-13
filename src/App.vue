<template>
  <div>
    <CNavbar />
    <RouterView v-bind:informations="informations" :visas="filtered" @country="handleSet" :countries="countries" @tour="handleTour" />
    <Footer></Footer>
  </div>
</template>
<script>
import CNavbar from './Components/CNavbar.vue';
import image from './Assets/logo.jpg';
import Footer from './Components/Footer.vue';

export default {
  data() {
    return {
      informations: [
        { id: 1, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur nostrum vero dicta corrupti impedit eveniet quod aperiam officia? Aut voluptatum, dolores dolorum quibusdam odit ab rem suscipit eaque minima voluptatem. Quibusdam iste nesciunt voluptate repellat, dignissimos pariatur omnis deserunt obcaecati autem possimus quia consectetur velit eius, voluptas voluptatum distinctio!', image: image },
        { id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur nostrum vero dicta corrupti impedit eveniet quod aperiam officia? Aut voluptatum, dolores dolorum quibusdam odit ab rem suscipit eaque minima voluptatem. Quibusdam iste nesciunt voluptate repellat, dignissimos pariatur omnis deserunt obcaecati autem possimus quia consectetur velit eius, voluptas voluptatum distinctio!', image: image },
        { id: 3, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur nostrum vero dicta corrupti impedit eveniet quod aperiam officia? Aut voluptatum, dolores dolorum quibusdam odit ab rem suscipit eaque minima voluptatem. Quibusdam iste nesciunt voluptate repellat, dignissimos pariatur omnis deserunt obcaecati autem possimus quia consectetur velit eius, voluptas voluptatum distinctio!', image: image },
        { id: 4, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur nostrum vero dicta corrupti impedit eveniet quod aperiam officia? Aut voluptatum, dolores dolorum quibusdam odit ab rem suscipit eaque minima voluptatem. Quibusdam iste nesciunt voluptate repellat, dignissimos pariatur omnis deserunt obcaecati autem possimus quia consectetur velit eius, voluptas voluptatum distinctio!', image: image },
      ],
      visas: [
          // Korea Visas
          { id: 1, city: 'kanada', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'Ish' },
          { id: 2, city: 'kanada', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'turist' },
          // Japan Visas
          { id: 3, city: 'finlandiya', desc: "Sizga kerak boladigon hujjatlar: chet elga chikish...", documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'Ish' },
          { id: 4, city: 'finlandiya', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'turist' },
          // USA Visas
          { id: 5, city: 'serbiya', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', tour: 'Ish', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.' },
          { id: 6, city: 'serbiya', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', tour: 'turist', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.' },
          { id: 7, city: 'vengriya', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'Ish' },
          { id: 8, city: 'vengriya', desc: 'Sizga kerak boladigon hujjatlar: chet elga chikish...', documentation: '1. Chetelga chikish pasporti. 2. Rasm 3.5x4.5 elektron holatda. 3. 086 forma (med spravka) Rus tilida, 4 Sugurta. 5. Bank hisob raqam (18000$ dan 30000$ gacha). 6. Rus tili (muloqot darajada). 7. Sudlanmaganlik haqida ma"lumotnoma.',tour: 'turist' },

      ],
      countries: [
        {id: 1, title: 'Kanada', desc: 'Kanada is beatiful'},
        {id: 2, title: 'Finlandiya', desc: 'Finlandiya is beatiful'},
        {id: 3, title: 'Serbiya', desc: 'Serbiya is beatiful'},
        {id: 4, title: 'London', desc: 'London is beatiful'},
        {id: 5, title: 'France', desc: 'France is beatiful'}
      ],
      city: '',
      tour: ''
    }
  },
  mounted() {
    console.log(this.visas)
  },
  computed: {
    filtered() {
      if (this.city === '') {
        if(this.tour === '') {
          return this.visas
        } else {
          return this.visas.filter(item => item.tour === this.tour)
        }
      } else {
        if(this.tour !== '') {
          return this.visas.filter(item => item.tour === this.tour && this.city === item.city)
        } else {
          return this.visas.filter(item => item.city === this.city)
        }
      }
    },
  },
  methods: {
    handleSet(target) {
      this.city = target;
      console.log('category: ' +  this.city)
    },
    handleTour(target) {
      this.tour = target;
      console.log('tour ' + this.tour)
    }
  },
  components: { CNavbar, Footer },
}
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 0.5208333333333334vw;
}

::-webkit-scrollbar-thumb {
  background-color: #11009E;
  border-radius: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

section {
  padding: 4.481792717086835vh 0;
}

.container {
  width: 100%;
  max-width: 78.125vw;
  margin: 0 auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>