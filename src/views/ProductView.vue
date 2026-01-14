<template>
    <div class="product-view">
        <div class="product">
            <div class="product-img-box"><img :src="'/img/products/'+product.type+'/'+product.image"></div>
            <div class="product-info">
                <h1>{{ product.name }}</h1>
                <h2>{{ product.price }}€</h2>
                <p>{{ product.description }}</p>
                <button>Pridať do košíka</button>
            </div>
        </div>
    </div>
</template>
<script>
    import data from '../data.json';

    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        computed:{
            product(){
                const productSlug = this.$route.params.productSlug;
                
                for(let d of data.categories){
                    for(let p of d.products){
                        if(p.slug === productSlug)
                            return p;
                        }
                    }
                }   
            }
        }
</script>
