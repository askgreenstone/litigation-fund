<template>
  <!-- 首页底部 -->
  <div class="bottom">
    <ul class="bottomList">
      <li class="bottomListLogo">
        <div><img src="../../assets/images/logoBlank.png"></div>
        <div>
          <span class="bottomListLogoTitle">Disclaimer</span><br>
          <span>The information contained herein may have content obtained through various public and private channels, and this website does not guarantee the authenticity, accuracy, completeness, timeliness or originality of the content resourced from third parties. Audiences shall bear any and all aftermath and liabilities on their own for transactions or decisions based on the foregoing information.</span>
        </div>
      </li>
      <!-- pc -->
      <li class="bottomListTel bottomListTelPc">
        <div>
          <span class="bottomListContactUs">Contact Us</span><br>
          <span>Email : business@green-stone.cn</span><br>
          <span>WeChat Official Account : <br/>Litigation Support</span>
        </div>
      </li>
      <!-- h5 -->
      <li class="bottomListTel bottomListTelH5">
        <div>
          <span class="bottomListContactUs">Contact Us</span><br>
          <span style="position: relative;top: 5px;">Email :<br/> business@green-stone.cn</span><br>
          <span style="position: relative;top: 20px;">WeChat Official Account : <br/>Litigation Support</span>
        </div>
      </li>
      <li class="bottomListQrcode">
        <div><img src="../../assets/images/qrcode.png"></div>
      </li>
    </ul>
    <ul class="topNavList">
        <li @click="scrollTop">Back to the top</li>
        <router-link to="/Index-en" tag="li" exact >Home</router-link>
        <router-link to="/AboutUs-en" tag="li" exact >About Us</router-link>
        <router-link to="/Funding-en" tag="li" exact >Our Services</router-link>
        <router-link to="/Team" style="display:none" tag="li" >团队/顾问</router-link>
        <router-link to="/Coverage-en" tag="li" exact >National Network</router-link>
        <router-link to="/Blog-en" tag="li" >LS Institute</router-link>
        <router-link to="/Scenarios-en" tag="li" exact >Case Applications</router-link>
        <router-link to="/Contact-en" tag="li" >Contact Us</router-link>
        <li @click="selectLanguage()">中文</li>
      </ul>
    <div class="bottomLine"></div>
    <div class="bottomText">2019 Shenzhen LawStone Capital Co., Ltd.  Copyright Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {

    }
  },
  methods: {
    scrollTop(){
      window.scrollTo(0,0)
    },
    // 选择语言
    selectLanguage: function(){
      // console.log(window.location.pathname)
      let pathname = window.location.pathname
      let newPathname = ''
      if(pathname.indexOf('-en') > -1){
        if(pathname.indexOf('Index') > -1){
          newPathname = '/'
        }else{
          newPathname = pathname.replace('-en','')
        }
        
      }else{
        newPathname = pathname === '/' ? '/Index-en' : pathname + '-en'
      }
      this.$router.push({//你需要接受路由的参数再跳转
            path: newPathname
          });
    }
  },
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
}
.bottomListTel .bottomListContactUs{
  color: #cacaca;
  font-size: 13px;
}
.bottomListTelPc{
  display: block;
}
.bottomListTelH5{
  display: none;
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
    height: 40px;
  }
  .bottomListTel{
    width: 200px;
    padding-top: 30px;
    color: #cacaca;
    font-size: 12px;
    margin-left: 160px;
    position: relative;
    top: 10px;
  }
  .bottomListTel .bottomListContactUs{
    color: #cacaca;
    font-size: 13px;
    display: none;
  }
  .bottomListTelPc{
    display: none;
  }
  .bottomListTelH5{
    display: block;
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
    height: 308px;
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
    font-weight: bold;
  }
  .topNavList li.active{
    background: #fff;
    color: #c49a6d;
  }
  .bottomLine{
    width: 95%;
    height: 1px;
    background: #cacaca;
    margin: 55px auto 0;
  }
  .bottomText{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #cacaca;
    font-size: 12px;
    text-align: center;
  }
}
</style>
