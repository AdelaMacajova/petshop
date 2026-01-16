<template>
    <div class="blog-card" v-for="article in articles" :key="'article'+article.id">
        <RouterLink :to="'/article/'+article.id">
            <div>
                <h2>{{ article.name }}</h2>
                <p>{{article.description}}</p>
            </div>
        </RouterLink>
    </div>
    <RouterView/>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router';
    import data from '../data.json';

    export default{
        components:{
            RouterLink, RouterView
        },
        data(){
            return{
                articles: data.articles
            }
        },
        methods:{

        },
    }
</script>