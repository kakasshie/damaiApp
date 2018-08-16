<template>
    <div>
       <div>
           <label>用户名:</label>
           <input type="text" v-model="username"/>
       </div>
        <div>
            <label>密码;</label>
            <input type="password" v-model="password"/>
        </div>
        <div>
            <input type="submit" value="提交" @click="submits()"/>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods:{
            submits(){
                let That = this;
                this.$http.getHelloWorld("/api/user/login",{username:this.username,password:this.password})
                        .then(function(rel){
//                            console.log(rel)
                            if(rel.success == 0){
//                                this.$route.push()
//                                alert(rel.msg);
//                                console.log(rel)
                                That.$router.push({
                                    name:"Home",
                                    path:"home",
                                    params:{
                                        user:rel.user
                                    }
                                })
                            }else{
//                                alert(rel.msg);
                                console.log(rel.msg);
                            }
                        })

            }
        }
    }
</script>

<style scoped>

</style>
