<style>
   .myMsg_cont{
     text-align: left;
   }
   .myMsg_cont li a{
     color:black;
   }
   .myMsg_cont li a:hover{
     color:deeppink;
   }
   .myMsg_cont_input,.myMsg_cont_add{
      height:30px;
   }
   .myMsg_cont_input{
     width: 200px;
   }
   .myMsg_cont_add{
     width: 80px;
     background-color: #ff1268;
     border: none;
     color: #fff;
     font-weight: bolder;
   }
   .myMsg_cont_coupons{
     position: relative;
   }
   .myMsg_cont li .myMsg_cont_coupons_rules{
     position: absolute;
     color:orange;
     top:8px;
     right:10px;
   }
  .myMsg_cont_coupons_Tabs{
    color:black;
  }
</style>
<template>

    <div class="myMsg">
      <ul class="myMsg_cont">
        <li><a href="">我的大麦</a> > <a href="">我的优惠券</a></li>
        <li><input type="text" placeholder="请输入优惠券验证码" class="myMsg_cont_input"> <button class="myMsg_cont_add">添加优惠券</button></li>
        <li class="myMsg_cont_coupons">
          <Tabs value="name1" class="myMsg_cont_coupons_Tabs">
            <TabPane label="为示意图" name="name1"><Tables></Tables></TabPane>
            <TabPane label="已使过期" name="name2"><Tables></Tables></TabPane>
            <TabPane label="已使用" name="name3"><Tables></Tables></TabPane>
          </Tabs>
          <a href="#" class="myMsg_cont_coupons_rules">使用规则</a>
        </li>
      </ul>
    </div>

</template>

<script>
    import Tables from '../static/Tables.vue'
    export default {
        name: "MyMsg",
        data:function(){
          return{

          }
        },
       components:{
          Tables
       }
    }

</script>
