<template>
  <!-- 首页底部 -->
  <div class="bottom">
    <ul class="bottomList">
      <li class="bottomListLogo">
        <div><img src="../../assets/images/logoBottom.png"></div>
        <div>
          <span class="bottomListLogoTitle">平台免责声明：</span><br>
          <span>网站所载的信息可能包含通过各种公开和非公开渠道所获取的内容，本网站不保证第三方内容的真实性、准确性、完整性、实时性、原创性等。基于前述信息而作的任何交易或决定，由您自行承担决策或决定的后果和责任。</span>
        </div>
      </li>
      <li class="bottomListTel">
        <div>
          <span class="bottomListContactUs">联系我们</span><br>
          <span>电邮：business@green-stone.cn</span><br>
          <span>微信公众号：诉讼资助</span>
        </div>
      </li>
      <li class="bottomListQrcode">
        <div><img src="../../assets/images/qrcode.png"></div>
      </li>
    </ul>
    <ul class="topNavList">
        <router-link to="/" tag="li" exact >首页</router-link>
        <router-link to="/AboutUs" tag="li" exact >关于我们</router-link>
        <router-link to="/Funding" tag="li" exact >我们的服务</router-link>
        <router-link to="/Team" style="display:none" tag="li" >团队/顾问</router-link>
        <router-link to="/Coverage" tag="li" exact >专业网络</router-link>
        <router-link to="/Blog" tag="li" >律石研究院</router-link>
        <router-link to="/Scenarios" tag="li" exact >应用案例</router-link>
        <router-link to="/Contact" tag="li" >联系我们</router-link>
      </ul>
    <div class="bottomLine"></div>
    <div class="bottomText">2018 深圳律石资本有限公司 版权所有</div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*底部版权*/
.bottom{
  padding-top: 34px;
  background: #333;
}
.bottomList{
  width: 70%;
  margin: 0 auto 20px;
  display: flex;
}
.bottomListLogo{
  width: 55%;
  margin-right: 5%;
}

.bottomListLogo div{
  color: #cacaca;
  font-size: 12px;
  font-family: 'Normal';
  transform: scale(0.8);
}
.bottomListLogo img{
  text-align: left;
  margin-left: 0;
  transform: scale(1);
  height: 56px;
}
.bottomListTel{
  width: 23%;
  margin-right: 10%;
  padding-top: 30px;
  color: #cacaca;
  font-size: 12px;
  font-family: 'Regular';
}
.bottomListTel .bottomListContactUs{
  color: #cacaca;
  font-size: 13px;
  font-family: 'Medium';
}
.bottomListQrcode{
  width: 12%;
}
.bottomListQrcode img{
  width: 100%;
}
.bottomLine{
  width: 95%;
  height: 1px;
  background: #cacaca;
  margin: 0 auto;
}
.bottomText{
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #cacaca;
  font-size: 12px;
  font-family: 'Regular';
  text-align: center;
}
.topNavList{
  display: none;
}

@media screen and (max-width:414px) {
  .bottom{
    padding-top: 34px;
    background: #333;
  }
  .bottomList{
    width: 100%;
    margin: 0 auto -30px;
    display: block;
  }
  .bottomListLogo{
    width: 100%;
    margin-right: 5%;
  }

  .bottomListLogo div{
    color: #cacaca;
    font-size: 12px;
    font-family: 'Normal';
    transform: scale(1);
    padding: 0 20px;
  }
  .bottomListLogo div .bottomListLogoTitle{
    display: none;
  }
  .bottomListLogo img{
    text-align: left;
    margin-left: 0;
    transform: scale(1);
    height: 50px;
  }
  .bottomListTel{
    width: 200px;
    padding-top: 30px;
    color: #cacaca;
    font-size: 12px;
    font-family: 'Regular';
    margin-left: 160px;
  }
  .bottomListTel .bottomListContactUs{
    color: #cacaca;
    font-size: 13px;
    font-family: 'Medium';
    display: none;
  }
  .bottomListQrcode{
    width: 100px;
    height: 100px;
    margin-top: 20px;
    position: relative;
    top: -70px;
    left: 20px;
  }
  .bottomListQrcode img{
    width: 100%;
  }
  .topNavList{
    width: 100%;
    height: 280px;
    display: block;
  }
  .topNavList li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background: #3f3e3e;
    opacity: 0.8;
  }
  .topNavList li.active{
    background: #fff;
    color: #c49a6d;
  }
  .bottomLine{
    width: 95%;
    height: 1px;
    background: #cacaca;
    margin: 0 auto;
  }
  .bottomText{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #cacaca;
    font-size: 12px;
    font-family: 'Regular';
    text-align: center;
  }
}
</style>
