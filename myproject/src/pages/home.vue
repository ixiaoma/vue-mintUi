<template>
    <div class="homePage">
        <headers pageTitle="首页"></headers>
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <router-link v-for="(item,index) in routerList" :key="index" :to="item.path">
                <li>{{ item.name }}</li>
            </router-link>
        </ul>
        
    </div>
</template>
<script>
import header from '../components/header.vue'
export default {
    components:{
        headers:header
    },
    data(){
        return {
            routerList:[
                {path:'/toast',name:'Toast'}
            ]
        }
    },
    methods:{
        loadMore(){

        }
    }
}
</script>
