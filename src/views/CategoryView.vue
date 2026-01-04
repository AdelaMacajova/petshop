<template>
    <div v-for="category in categories" :key="category.id">
        <div v-if="category.slug === $route.params.categorySlug"
        class="banners"
        :style="'background-image: url(/img/banners/'+category.banner+')'">{{ category.name }}</div>
    </div>

    <div class="product-cards card-wrapper">
        <div class="product-card" v-for="product in dataProducts" :key="product.name">
            <RouterLink><div class="category-img-box"><img :src="'img/products/'+product.type+'/'+product.image"></div></RouterLink>
            <label class="product-name">{{ product.name }}</label>
            <div class="price-cart-row">
                <label>{{ product.price }}€</label>
                <hr class="separator">
                <button @click=""><v-icon icon="mdi-cart"></v-icon></button>
            </div>
        </div>
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
            dataProducts(){
                const categorySlug = this.$route.params.categorySlug;
                
                for(let i=0; i<data.categories.length; i++){
                    if(data.categories[i].slug === categorySlug)
                        return data.categories[i].products;
                    }
                return [];
                }   
            }
        }
</script>
