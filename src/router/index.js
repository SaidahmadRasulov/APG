import { createRouter, createWebHistory } from "vue-router";
import Home from '../Pages/Home.vue';
import About from '../Pages/About.vue';
import City from '../Components/City.vue';
import Contact from '../Components/Contact.vue';
import Visas from '../Pages/Visas.vue';
import Documents from '../Pages/Documents.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cities/:id',
      name: 'More',
      component: City
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/countries',
      name: 'Visas',
      component: Visas
    },
    {
      path: '/document/:id',
      name: 'Documents',
      component: Documents
    }
  ],
});

export default router;
