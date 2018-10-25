<template>
    <div class="header">
        <mt-header title="多个按钮">
            <router-link to="/" slot="left">
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
    }
}
</script>
