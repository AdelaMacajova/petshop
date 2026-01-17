<template>
    <div class="article-card" v-for="article in articles" :key="article.id">
        <div v-if="$route.params.articleSlug === article.id+''">
            <h2>{{ article.name }}</h2>
            <p>{{article.description}}</p>
        </div>
    </div>
</template>

<script>
    import data from '../data.json';

    export default{
        components:{

        },
        
        data(){
            return{
                articles: data.articles
            }
        }
    }
</script>