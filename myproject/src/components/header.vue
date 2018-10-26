<template>
    <div class="header">
        <mt-header :title="pageTitle">
            <router-link v-if="backPath" :to="backPath" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
import { Header,Button } from 'mint-ui';//按需加载
export default {
    components:{
        mtHeader:Header,
        mtButton:Button
    },
    props:["backPath","pageTitle"]
}
</script>
