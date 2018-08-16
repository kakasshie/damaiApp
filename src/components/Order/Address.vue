<style>
   .address{

   }
   .address_head{
     text-align: left;
     text-indent: 5px;
     height: 50px;
     line-height: 50px;
     width: 100%;
     background: linear-gradient(#f9f9f9 , white);
     border:1px solid #ddd;
     margin-bottom: 40px;
     color:gainsboro;
   }
</style>
<template>
   <div class="address">
     <div class="address_head">
       地址管理
     </div>
     <div class="address_cont">
       <div class="address_cont_button">
         <button>创建新地址</button>
       </div>
       <div class="address_cont_form">
         <form action="#">
           <ul>
             <li><span>*</span>地址别名： <input type="text" value="新建地址"></li>
             <li><span>*</span>收件人： <input type="text"></li>
             <li><span>*</span>手机： <input type="text"></li>
             <li><span>*</span>座机 ：<input type="text"></li>
             <li></li>
             <li></li>
             <li></li>
           </ul>
         </form>
       </div>
     </div>
   </div>
</template>

<script>
    export default{
      name:'Address'
    }
</script>

<style>

</style>
