<template>
  <div class="layout">
    <!-- Sol Nav Bar -->
    <div class="nav-bar">
      <button 
        v-for="(component, index) in components" 
        :key="index" 
        @click="visibleComponent = index">
        {{ component.name }}
      </button>
    </div>

    <!-- Sağ Taraf Main Alan -->
    <div class="main-bar">
      <ComponentOne v-show="visibleComponent === 0" />
      <ComponentTwo v-show="visibleComponent === 1" />
      <ComponentThree v-show="visibleComponent === 2" />
      <ComponentFour v-show="visibleComponent === 3" />
      <ComponentFive v-show="visibleComponent === 4" />
      <ComponentSix v-show="visibleComponent === 5" />
      <ComponentSeven v-show="visibleComponent === 6" />
      <ComponentEight v-show="visibleComponent === 7" />
      <ComponentNine v-show="visibleComponent === 8" />
      <ComponentTen v-show="visibleComponent === 9" />
      <ComponentEleven v-show="visibleComponent === 10" />
      <ComponentTwelve v-show="visibleComponent === 11" />
      <ComponentThirteen v-show="visibleComponent === 12" />
    </div>
  </div>
</template>

<script>
import ComponentOne from '~/components/Header.vue';
import ComponentTwo from '~/components/Slider.vue';
import ComponentThree from '~/components/ComponentThree.vue';
import ComponentFour from '~/components/ComponentFour.vue';
import ComponentFive from '~/components/Footer.vue';
import ComponentSix from '~/components/BlogCard.vue';
import ComponentSeven from '~/components/IslemRehberi.vue';
import ComponentEight from '~/components/Yardim.vue';
import ComponentNine from '~/components/Sepet.vue';
import ComponentTen from '~/components/Dergi.vue';
import ComponentEleven from '~/components/ComponentEleven.vue'; // Yeni eklendi
import ComponentTwelve from '~/components/ComponentTwelve.vue'; // Yeni eklendi
import ComponentThirteen from '~/components/ComponentThirteen.vue'; // Yeni eklendi

export default {
  components: {
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    ComponentSix,
    ComponentSeven,
    ComponentEight,
    ComponentNine,
    ComponentTen,
    ComponentEleven, // Yeni eklendi
    ComponentTwelve, // Yeni eklendi
    ComponentThirteen, // Yeni eklendi
  },
  data() {
    return {
      visibleComponent: 0, // Başlangıçta ilk component gösterilir
      components: [
        { name: 'Component One' },
        { name: 'Component Two' },
        { name: 'Component Three' },
        { name: 'Component Four' },
        { name: 'Component Five' },
        { name: 'Component Six' },
        { name: 'Component Seven' },
        { name: 'Component Eight' },
        { name: 'Component Nine' },
        { name: 'Component Ten' },
        { name: 'Component Eleven' }, // Yeni eklendi
        { name: 'Component Twelve' }, // Yeni eklendi
        { name: 'Component Thirteen' }, // Yeni eklendi
      ],
    };
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.nav-bar {
  width: 20%;
  background: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.nav-bar button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  text-align: left;
}

.nav-bar button:hover {
  background: #0056b3;
}

.main-bar {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
