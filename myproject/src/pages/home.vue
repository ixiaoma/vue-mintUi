<template>
    <div class="homePage">
        <headers></headers>
        <!-- <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="item in list">{{ item }}</li>
        </ul> -->
        <router-link to="/" slot="left">
            
        </router-link>
    </div>
</template>
<script>
import header from '../components/header.vue'
export default {
    components:{
        headers:header
    }
}
</script>
