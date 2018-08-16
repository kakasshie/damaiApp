<style scoped>
    .admin_cont{
        width: 70%;
        heigth:500px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .admin_cont_menu{
      width:30%;
      float: left;
    }
    .admin_cont_c{
        border: 1px solid red;
        width: 65%;
        height: 500px;
        float: left;
        margin-left: 1%;
    }
    .admin_cont_menu_mine{
       height: 30px;
       width:100%;
       line-height: 30px;
      color: white;
      font-weight: bolder;
      background: linear-gradient(#ec0375, #c4005d);
    }
    .admin_cont_menu_trading{
      height: 30px;
      font-weight: bolder;
      background-color: #f9f9f9;
      border: 1px solid #dddddd;
    }
    .admin_cont_menu_trading_ul{
      border-left:1px solid #dddddd;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
    }
    .admin_cont_menu_trading_ul li{
      height: 30px;
      line-height: 30px;
    }
    .admin_cont_menu_trading_ul li:hover{
      background-color: #f9f9f9;
      border-left:2px solid #c4005d;
    }
    .admin_cont_menu_trading_ul li:hover .admin_cont_menu_trading_ul li>span{
      float: right;
    }
    .admin_cont_menu_trading_ul_arrow{
      padding: 2%;
      display: inline-block;
      width:10%;
      height:30px;
      color:skyblue;
    }

  li{
    list-style: none;
  }
</style>
<template>
    <div class="admin">
        <Head-top :username="username"/>
        <Head-search />
        <div class="admin_cont">
            <div class="admin_cont_menu floatLeft">
                <div class="admin_cont_menu_mine">我的大麦</div>
                <div>
                    <ul>
                        <li>
                            <div class="admin_cont_menu_trading">交易中心</div>
                            <ul class="admin_cont_menu_trading_ul">
                                <li><router-link to="/admin/ordermenu"><span class="admin_cont_menu_trading_ul_arrow">></span>订单管理</router-link></li>
                                <li><router-link to="/admin/mymsg"><span class="admin_cont_menu_trading_ul_arrow">></span>我的优惠券</router-link></li>
                            </ul>
                        </li>
                        <li>
                          <div class="admin_cont_menu_trading">账户中心</div>
                          <ul class="admin_cont_menu_trading_ul">
                            <li><router-link to="/admin/address"><span class="admin_cont_menu_trading_ul_arrow">></span>收货地址</router-link></li>
                            <li><router-link to="/admin/setting"><span class="admin_cont_menu_trading_ul_arrow">></span>账号设置</router-link></li>
                            <li><router-link to="/admin/personal"><span class="admin_cont_menu_trading_ul_arrow">></span>个人信息</router-link></li>
                            <li><router-link to="/admin/commonly"><span class="admin_cont_menu_trading_ul_arrow">></span>常用购票人</router-link></li>
                          </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="admin_cont_c floatLeft">
                <router-view />
            </div>
        </div>
    </div>

</template>

<script>
    import HeadSearch from "@/components/HeadSearch"
    import HeadTop from "@/components/HeadTop"
    export default {
        data(){
            return{
                username:""
            }
        },
        mounted(){
              try{
                 this.name = this.$route.params.data.name
              }catch(err){
                  if(window.localStorage.getItem("username")){
                      this.username = window.localStorage.getItem("username")
                  }else{
                      this.username = ".....";
                  }
//                  console.log(new Error("用户名信息出错"));
              }
        },
        components:{
            HeadSearch,
            HeadTop
        }
    }

</script>

