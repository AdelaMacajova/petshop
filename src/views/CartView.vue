<template>
    <div class="cart">
        <div class="cart-row" v-for="product in cartStore.cart" :key="product.id">
            <div class="cart-img-name-price">
                <div>
                    <div class="cart-img"><img :src="'/img/products/'+product.type+'/'+product.image"></div>
                    <h2>{{ product.name }}</h2>
                </div>
                <label>Cena: {{ product.price }}€</label>
            </div>
            <div><button @click="cartStore.removeFromCart(product)"><v-icon icon="mdi-alpha-x-box"></v-icon>Odstrániť</button></div>
        </div>
        <hr>
        <h3>Cena spolu: {{ totalPrice }}€</h3>
    </div>
</template>

<script>
import {useCartStore} from "../stores/cart.js"

export default{
    data(){
        return{
            cartStore: useCartStore()
        }
    },

    computed:{
        totalPrice(){
            let price=0;
            for(let i=0; i<this.cartStore.cart.length; i++){
                price+=Number(this.cartStore.cart[i].price)
            }
            return price
        }
    }
    
}
</script>