<template>
  <CategoryNavigation/>
  <RouterView/>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import CategoryNavigation from '../components/CategoryNavigation.vue'

export default{
  components:{
    CategoryNavigation, RouterView
  },
  data(){
    return{

    }
  },
  methods:{

  }
}

</script>