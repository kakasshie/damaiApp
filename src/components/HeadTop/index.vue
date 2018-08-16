<template>
    <div class="headTop">
        <div class="headTop_cont floatLeft">
            <span>Hi,欢迎[<span>{{ username }}</span>，<span>退出</span>]登录</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HeadTop",
        props:["username"]
    }

</script>

<style scoped>
    .headTop{
        width: 1000px;
        margin:0 auto;
        padding: 15px;
        overflow: hidden;
    }
</style>