<template>
  <v-app>
    <UserNavigation/>
    <MainNavigation/>
    <RouterView/>
  </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import UserNavigation from './components/UserNavigation.vue'
import MainNavigation from './components/MainNavigation.vue';

export default{
  components:{
    UserNavigation, MainNavigation
  },
  data(){

  },
  methods:{

  }
}

</script>