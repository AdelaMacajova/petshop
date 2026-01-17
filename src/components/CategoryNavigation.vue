<template>
    <v-app-bar class="category-nav">
        <RouterLink :to="'/eshop/'+category.slug" v-for="category in categories" :key="category.id">{{ category.name }}</RouterLink>
    </v-app-bar>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import data from '../data.json';

    export default{
        components:{
            RouterLink
        },

        data(){
            return{
                categories: data.categories
            }
        }
    }
</script>
