<template>
    <div class="headSearch">
        <div class="headSearch_cont">
            <div class="floatLeft headSearch_cont_img">
                <img src="./img/logo-334-120.png" />
            </div>
            <div class="floatLeft headSearch_cont_select">
                <Select />
            </div>
            <div class="floatLeft headSearch_cont_input">
                <Input search  enter-button="搜索" placeholder="搜索明星、演出、体育赛事" style="background-color: red"/>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:"HeadSearch"
    }
</script>

<style scoped>
    .ivu-input-search{

    }
    .floatLeft{
      float: left;
    }
    .headSearch{
        clear: both;
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 10px;
        border-bottom:5px solid #ED0A75;
    }
    .headSearch_cont{
      width:1000px;
      height: 100px;
      margin: 0 auto;
    }
    .headSearch_cont_select{
        margin-top: 20px;
    }
    .headSearch_cont_input{
        margin-left: 35px;
        margin-top: 20px;
        width:50%;
    }
</style>
