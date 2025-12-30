<template>
    <v-app-bar class="category-nav">
        <RouterLink :to="'/'+category.slug" v-for="category in categories">{{ category.name }}</RouterLink>
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
        },
        methods:{

        },
    }
</script>
