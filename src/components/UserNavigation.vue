<template>
    <v-app-bar class="user-nav">
        <RouterLink to="/">
            <img src="/img/logo.png" height="48"></img>
        </RouterLink>
        <v-app-bar-title>
            <strong>
            Alvin's Pet Shop
            </strong>
        </v-app-bar-title>
        <RouterLink to="/login">Prihlásiť sa</RouterLink> <!-- Login -->
        <RouterLink to="/cart"><v-icon icon="mdi-cart-variant"></v-icon></RouterLink>
    </v-app-bar>
</template>
<script>
    import { RouterLink } from 'vue-router';
    export default{
        components:{
            RouterLink
        },
        data(){

        },
        methods:{

        },
    }
</script>
