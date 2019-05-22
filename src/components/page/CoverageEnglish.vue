<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
    <!-- 行业覆盖 地区辐射 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
    </div>
    <div class="introduction">
      <div class="introTitlePc">COVERAGE</div>
      <div class="introTitleH5">COVERAGE</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng"></div>
    </div>
    <!-- 地球网络 -->
    <div class="net">
      <img class="earth" src="../../assets/images/earthEnglish.png">
      <img class="earthMobile" src="../../assets/images/earthMobileEnglish.png">
      <ul class="address1">
        <li>
          <div class="addTop">Regions of The Six Circuit Courts of Supreme People's Court</div>
          <div class="addBottom">Shenzhen, Shenyang, Zhengzhou, Nanjing, Chongqing, Xi 'an</div>
        </li>
        <li class="addressBox">
          <div class="addressLeft">
            <div class="addTop">Beijing-Tianjin-Hebei Region</div>
            <div class="addBottom">Beijing, Tianjin, Hebei (Shijiazhuang)</div>
          </div>
          <div class="addressRight">
            <div class="addTop">The Pearl River Delta Region</div>
            <div class="addBottom">Guangzhou, Shenzhen, Zhuhai</div>
          </div>
        </li>
        <li>
          <div class="addTop">Yangtze River Delta Region</div>
          <div class="addBottom">Shanghai, Jiangsu (Nanjing, Wuxi, Changzhou, Suzhou, Nantong), Zhejiang (Hangzhou, Ningbo, Zhoushan, Wenzhou), Anhui (Hefei)</div>
        </li>
        <li>
          <div class="addTop">Other Regions</div>
          <div class="addBottom">Fujian (Xiamen, Fuzhou), Jiangxi (Nanchang), Hunan (Changsha), Guangxi (Nanning), Hainan (Haikou), Sichuan (Chengdu), Chongqing, Guizhou (Guiyang), Yunnan (Kunming), Heilongjiang (Harbin), Jilin (Changchun, Jilin), Liaoning (Dalian, Shenyang), Inner Mongolia (Hohhot), Xinjiang (Urumqi), Shaanxi (xi ' an), Gansu (Lanzhou), Qinghai (Xining), Ningxia (Yinchuan), Henan (Zhengzhou), Shanxi (Taiyuan), Shandong (Jinan, Qingdao), Hubei (Wuhan, Yellowstone), Tibet (Lhasa), Hong Kong, Taipei</div>
        </li>
      </ul>
    </div>
   
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlackEng'
import ApplyFunding from '@/components/common/ApplyFundingEng'
import Bottom from '@/components/common/BottomEng'
export default {
  name: 'AboutUs',
  data () {
    return {
    }
  },
  methods: {
    init: function(){
    },
  },
  mounted:function(){
    // this.init();
  },
  components:{
    TopNavBlack,
    ApplyFunding,
    Bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position{
    width:100%;
    height:115px;
    background:#fff;
    position:relative;
  }
/*行业覆盖 地区辐射*/
.aboutImg{
  width: 100%;
  position: relative;
  margin-bottom: -89px;
}
.aboutImg img{
  width: 100%;
  position: relative;
  top: -89px;
}
.introduction{
  width: 100%;
  height:85px;
  text-align: center;
  margin: 0 auto;
  background: #333;
  padding-top: 25px;
}
.introTitlePc{
  color: #fff;
  display: block;
  font-size: 21px;
  color: #c49a6d;
}
.introTitleH5{
  display: none;
}
.introLine{
  font-size: 0;
  margin: 2px 10px;
}
.introLine span{
  width: 20px;
  height: 1px;
  background: #c49a6d;
  display: inline-block;
  margin-right: 10px;
}
.introLine span.two{
  width: 180px;
}
.introLine span.three{
  margin-right: 0;
}
.introEng{
  color: #fff;
  font-size: 18px;
  margin-bottom: 33px;
  font-weight: bold;
}
/*地球网络*/
.net{
  width: 100%;
  position: relative;
}
.net .earth{
  width: 100%;
  display: block;
}
.net .earthMobile{
  display: none;
}
.address1{
  width: 75%;
  position: absolute;
  left: 18%;
  bottom: 3%;
  line-height: 1.5;
}
.addTop{
  color: #c49a6d;
  font-size: 15px;
}
.addBottom{
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
}
.addressBox{
  position: relative;
}
.addressRight{
  position: absolute;
  left: 30%;
  top: 0;
}
@media screen and (max-width:414px){
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
  /*行业覆盖 地区辐射*/
  .aboutImg{
    width: 100%;
    position: relative;
    margin-bottom: 0;
    overflow: hidden;
  }
  .aboutImg img{
    width: auto;
    height: 160px;
    left: -60px;
    position: relative;
    top: 0;
  }
  .introduction{
    width: 100%;
    height:85px;
    text-align: center;
    margin: 0 auto;
    background: #fff;
    padding-top: 25px;
  }
  .introTitleH5{
    color: #333;
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .introTitlePc{
    display: none;
  }
  .introLine{
    font-size: 0;
    margin: 2px 10px;
  }
  .introLine span{
    width: 20px;
    height: 1px;
    background: #c49a6d;
    display: inline-block;
    margin-right: 10px;
}
.introLine span.two{
  width: 150px;
}
  .introLine span.three{
    margin-right: 0;
  }
  .introEng{
    font-weight: bold;
    color: #333;
    font-size: 15px;
    margin-bottom: 33px;
  }
  /*地球网络*/
  .net{
    width: 100%;
    position: relative;
  }
  .net .earth{
    width: 100%;
    display: none;
  }
  .net .earthMobile{
    width: 100%;
    display: block;
  }
  .address1{
    width: 100%;
    position: relative;
    left: 0;
    bottom: 0;
    padding: 55px 20px 30px;
    box-sizing: border-box;
    line-height: 1.5;
    background: #333;
  }
  .addTop{
    color: #c49a6d;
    font-size: 14px;
  }
  .addBottom{
    color: #fff;
    font-size: 13px;
    margin-bottom: 55px;
  }
  .addressBox{
    position: relative;
  }
  .addressLeft{
    width: 50%;
  }
  .addressRight{
    left: 180px;
    top: 0;
  }
}
</style>
