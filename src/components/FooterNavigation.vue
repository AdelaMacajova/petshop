<template>
    <footer class="footer">
        <div class="footer-links">
            <h3>Odkazy</h3>
            <RouterLink to="/">E-shop</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
        </div>
        <div class="footer-contact">
            <h3>Kontakt</h3>
            <a href="mailto:kontakt@petshop.sk">kontakt@petshop.sk</a>
            <a href="tel:+421066455111">+421 066 455 111</a>
            <div>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </div>
        <div class="footer-about-us">
            <h3>O nás</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
        </div>
        <div class="footer-map">
             <h3>Nájdete nás</h3>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85098.98338044996!2d17.065666838735776!3d48.20000443573131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e63c10cf6c7%3A0x8f6377a3c30c0156!2sBratislava%20III%2C%20Bratislava!5e0!3m2!1ssk!2ssk!4v1768415324483!5m2!1ssk!2ssk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
</template>

<script>
    import { RouterLink } from 'vue-router';
    
    export default{
        components:{
            RouterLink
        },

        data(){
            return{
                
            }
        }
    }
</script>
