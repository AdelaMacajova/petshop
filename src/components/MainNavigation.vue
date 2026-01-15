<template>
    <v-app-bar class="main-nav">
        <RouterLink to="/"><strong>DOMOV</strong></RouterLink><hr>
        <RouterLink to="/eshop/psy"><strong>E-SHOP</strong></RouterLink><hr>
        <RouterLink to="/blog"><strong>BLOG</strong></RouterLink><hr>
        <RouterLink to="/kontakt"><strong>KONTAKT</strong></RouterLink>
    </v-app-bar>
</template>
<script>
    import { RouterLink } from 'vue-router';
    export default{
        components:{
            RouterLink
        },
        data(){
            return{}
        },
        methods:{

        },
    }
</script>
