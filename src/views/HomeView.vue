<template>
  <div class="home-content">
      <div class="home-product-card">
        <h2>Naše najlepšie produkty</h2>
        <RouterLink to="/eshop/psy">Nakupovať</RouterLink>
      </div>
      <br>
      <div class="home-blog-card">
        <h2>Novinky zo sveta domácich miláčikov</h2>
        <RouterLink to="/blog">Čítať blog</RouterLink>
      </div>
  </div>
</template>

<script>
import {RouterLink} from "vue-router"
export default{
  components:{
    RouterLink
    
  },
  data(){
    return{
      
    }
  },
  methods:{

  }
}

</script>