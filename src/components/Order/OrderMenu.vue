<style>
  .orderMenu{

  }
  .orderMenu_head{
    text-align: left;
    text-indent: 5px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: linear-gradient(#f9f9f9 , white);
    border:1px solid grey;
    margin-bottom: 40px;
  }
  .orderMenu_cont{
    width:100%;
    height:400px;
    border:1px solid grey;
  }
  .orderMenu_cont_warning{
    width:90%;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    background-color: #ffffe9;
    border: 1px solid orange;
    color:orange;
  }
  .orderMenu_cont_warning img{
    max-height: 20px;
    position: relative;
    top: 4px;
  }
  .orderMenu_cont_info{
    width: 70%;
    margin: 0 auto;
    text-align: left;
  }
  .orderMenu_cont_info p{
    display: block;
    padding: 10px;
    color:darkgray;
  }
  .orderMenu_cont_info_acquire{
    width:150px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
  }
  .orderMenu_cont_info_submit{
    width:100px;
    height: 30px;
    line-height: 30px;
   text-align: center;
    background: linear-gradient(#ea0a74 , #c1045d);
    border-color: orangered;
    color: white;
    cursor: pointer;
  }
</style>
<template>
    <div class="orderMenu">
        <div class="orderMenu_head">
          <a href="">我的大麦</a>><a href="">订单管理</a>>安全防护
        </div>
         <div class="orderMenu_cont">
            <div class="orderMenu_cont_warning">
              <img src="./img/lightbulb31.png" alt="">安全说明：麦麦为了更好的保护您的个人信息，需要您完成安全验证，再继续查看订单信息和个人信息。
            </div>
             <div class="orderMenu_cont_info">
               <form action="">
                  <p>短信提示：请用 <span>{{ phone }}</span>接收短信验证码，验证码有效期为5分钟</p>
                  <p>验证码：<input type="text"/></p>
                  <p>如果2分钟内没有收到短信验证码，您可以： <button class="orderMenu_cont_info_acquire">获取验证码</button> 或拨打1010-3721联系客服</p>
                  <p><input type="submit" value="验证" class="orderMenu_cont_info_submit" /></p>
               </form>
             </div>
         </div>
    </div>
</template>

<script>

    export default {
        name: "order",
        data:function(){
          return{
            phone:"187****4424"
          }
        }

    }

</script>
