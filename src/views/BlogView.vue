<template>
    <div class="blog-card" v-for="article in articles" :key="'article'+article.id">
        <RouterLink :to="'/article/'+article.id">
            <div>
                <h2>{{ article.name }}</h2>
                <p>{{article.description}}</p>
            </div>
        </RouterLink>
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
                articles: data.articles
            }
        }
    }
</script>