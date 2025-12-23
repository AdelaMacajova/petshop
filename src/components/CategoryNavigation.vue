<template>
    <v-app-bar class="category-nav">
        <RouterLink to="/">Psy</RouterLink>
        <RouterLink to="/">Mačky</RouterLink>
        <RouterLink to="/">Hlodavce</RouterLink>
        <RouterLink to="/">Vtáci</RouterLink>
        <RouterLink to="/">Akvaristika</RouterLink> <!--Spraviť s v-for -->
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
