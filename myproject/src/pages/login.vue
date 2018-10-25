<template>
    <div class="loginPage">
        <mt-field label="用户名" :state="nameState" v-model="username"></mt-field>
        <mt-field label="密码" type="password" :state="passState" v-model="password"></mt-field>
        <mt-button type="primary" @click="loginClick" size="large">登录</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            nameState:'',
            passState:''
        }
    },
    methods:{
        loginClick(){
                this.nameState = this.username ? (this.username=='0.0' ? 'success' : 'error') :'warning'
                this.passState = this.password ? (this.password=='1234567890' ? 'success' : 'error') :'warning'
                if(this.nameState == 'success' && this.passState == 'success'){
                    this.$router.push('home') 
                    sessionStorage.setItem('loginFlag',true)
                }else{
                    Toast('请填写正确的用户名密码')
                }
        }
    }
}
</script>

