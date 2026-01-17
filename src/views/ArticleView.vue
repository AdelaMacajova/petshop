<template>
    <Article></Article>
</template>

<script>
    import data from '../data.json';
    import Article from '../components/Article.vue';

    export default{
        components:{
            Article
        },

        data(){
            return{
                articles: data.articles
            }
        }
    }
</script>