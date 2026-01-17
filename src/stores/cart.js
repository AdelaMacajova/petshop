import {defineStore} from "pinia"

export const useCartStore = defineStore('cartStore',{
    state: () => ({
            cart: []
    }),
    actions:{
        addToCart(product){
            this.cart.push(product)
        },
        removeFromCart(product){
            for(let i=0; i<this.cart.length; i++){
                if(this.cart[i] === product){
                    this.cart.splice(i, 1)
                    break
                }
            }
        },
        
        cleanCart(){
            for(let i=this.cart.length-1; i>=0; i--){
                if(!this.cart[i] || !this.cart[i].id)
                    this.cart.splice(i, 1)
            }
        }
    },
    persist: true
})
