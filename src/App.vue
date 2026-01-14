<template>
  <v-app>
    <UserNavigation/>
    <MainNavigation/>
    <RouterView/>
    <FooterNavigation/>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router'
import UserNavigation from './components/UserNavigation.vue'
import MainNavigation from './components/MainNavigation.vue'
import FooterNavigation from './components/FooterNavigation.vue'

export default{
  components:{
    UserNavigation, MainNavigation, FooterNavigation
  },
  data(){

  },
  methods:{

  }
}

</script>