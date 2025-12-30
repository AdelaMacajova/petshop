<template>
    <div v-for="category in categories" :key="category.id">
        <div v-if="category.slug === $route.params.categoryslug"
        :class="'banner-'+category.id"
        :style="'background-image: url(/img/banners/'+category.banner">{{ category.name }}</div>
        
    </div>
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
        computed:{
            dataCategories(){

            }
        }
    }
</script>
