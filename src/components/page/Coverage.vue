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
      <div class="introTitle">行业覆盖 地区辐射</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng">COVERAGE</div>
    </div>
    <!-- 地球网络 -->
    <div class="net">
      <img class="earth" src="../../assets/images/earth.png">
      <img class="earthMobile" src="../../assets/images/earthMobile.png">
      <ul class="address1">
        <li>
          <div class="addTop">最高人民法院六巡所在地</div>
          <div class="addBottom">深圳、沈阳、郑州、南京、重庆、西安</div>
        </li>
        <li class="addressBox">
          <div class="addressLeft">
            <div class="addTop">京津冀</div>
            <div class="addBottom">北京、天津、河北(石家庄)</div>
          </div>
          <div class="addressRight">
            <div class="addTop">珠三角</div>
            <div class="addBottom">广州、深圳、珠海</div>
          </div>
        </li>
        <li>
          <div class="addTop">长三角</div>
          <div class="addBottom">上海、江苏(南京、无锡、常州、苏州、南通)、浙江(杭州、宁波、舟山、温州)、安徽(合肥)</div>
        </li>
        <li>
          <div class="addTop">其他地区</div>
          <div class="addBottom">福建（厦门、福州）、江西（南昌）、湖南（长沙）、广西（南宁）、海南（海口）、四川（成都）、重庆、贵州（贵阳）、云南（昆明）、黑龙江（哈尔滨）、吉林（长春、吉林）、辽宁（大连、沈阳）、内蒙古（呼和浩特）、新疆（乌鲁木齐）、陕西（西安）、甘肃（兰州）、青海（西宁）、宁夏（银川）、河南（郑州）、山西（太原）、山东（济南、青岛）、湖北（武汉、黄石）、西藏（拉萨）、中国香港、中国台北</div>
        </li>
      </ul>
    </div>
   
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import ApplyFunding from '@/components/common/ApplyFunding'
import Bottom from '@/components/common/Bottom'
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
.introTitle{
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  color: #c49a6d;
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
  .introTitle{
    color: #c49a6d;
    font-size: 18px;
    font-weight: bold;
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
  .addressRight{
    left: 180px;
    top: 0;
  }
}
</style>
