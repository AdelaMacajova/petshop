<template>
  <CategoryNavigation/>
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
import CategoryNavigation from '../components/CategoryNavigation.vue'

export default{
  components:{
    CategoryNavigation, RouterView
  },

  data(){
    return{

    }
  }
}
</script>