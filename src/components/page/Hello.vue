<template>
  <div class="hello">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack v-bind:bgColor="bgColor"></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
     <!-- pc端图片轮播 -->
    <div id="window">
      <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="items in swiperPc" :key="items"><img :src="items"></div>
            </div>
        </div>
    </div>
    <!-- 移动端图片轮播 -->
    <div id="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="items in swiper" :key="items"><a href=""><img :src="items"></a></div>
            </div>
        </div>
    </div>

    <!-- 诉讼资助简介 -->
    <div class="introduction">
      <div class="introTitle">律石诉讼资助</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng">LITIGATION SUPPORT</div>
      <div class="introMessage">如果您有民商事诉讼、仲裁、执行领域的重大、疑难案件，或司法破产重整、清算事项，因当事人财力有限，或不符合现有代理人的专业领域、地域范畴，启动司法程序的门槛高企，请联系我们。律石以诉讼资助、全国网络覆盖和资深律师、专家、顾问团队，提供领先的一揽子解决方案，实现胜诉和回款。</div>
      <div class="introMessage">律石诉讼资助以卓越的专业能力，在争议解决中为当事人和代理律师提供团队、专业和启动费用方面的帮助，来释放合法诉权的潜在价值。已有越来越多的财富500强公司、上市公司、企业和个人从中受益。诉讼资助日益成为民商事诉讼、仲裁、执行、破产重整领域的主流趋势。</div>
      <div class="introMessage">争议解决涉及的专业门槛高、诉讼周期长，应收款长期挂账，甚至最终超过诉讼时效而不得不予以核销，严重影响现金流周转。当事人对律师行业和司法体系的生疏，也可能导致其合理合法的诉权主张被迫推迟或放弃追索。</div>
      <div class="introMessage">当事人之间，财务资源、法律专业资源可能存在着巨大差异，这将一定程度给其自身的司法救济带来障碍，甚至出现现金流紧张的当事人无法接近司法公平。因此，诉讼资助应运而生，创造价值，增益共赢。</div>
    </div>
    <!-- 客户/律师 -->
    <div class="introduction introduction2 introduction3">
      <div class="introTitle">为当事人或律师提供</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng">PROVIDE FOR CLIENTS AND LAWYERS</div>
    </div>
    <div class="lawyer">
      <div class="introduction introduction2 ">
        <div class="introTitle">为当事人或律师提供</div>
        <div class="introLine">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng">PROVIDE FOR CLIENTS AND LAWYERS</div>
      </div>
      <ul class="lawyerList">
        <li>
          <img src="../../assets/images/professionalService.png" >
          <div class="lawyerTitle">专业服务</div>
          <div class="lawyerBox">
            <span>为客户或代理人提供特定法律领域的专家技术支持</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/coveringCountry.png" >
          <div class="lawyerTitle">覆盖全国</div>
          <div class="lawyerBox">
            <span>业务遍及全国50多个城市和地区(含香港、台湾)</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/resourceSupport.png" >
          <div class="lawyerTitle">品质服务</div>
          <div class="lawyerBox">
            <span>从前期论证到案件启动、审理、执行，全流程风控跟进</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/litigation.png" >
          <div class="lawyerTitle">诉讼垫资</div>
          <div class="lawyerBox lawyerBox1">
            <span>垫付诉讼费、律师费<br/>、保全费、评估费、<br/>鉴定费、审计费...</span>
          </div>
          <div class="lawyerBox lawyerBox2">
            <span>垫付诉讼费、律师费<br/>、保全费、评估费、<br/>鉴定费、审计费...</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 支持 -->
    <div class="support">
      <div class="introduction">
        <div class="introTitle">合作流程</div>
        <div class="introLine introLine2">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng">COOPERATION PROCEDURES</div>
      </div>
      <div class="introListBox1">
        <ul>
          <li>
            <img class="img" src="../../assets/images/hello1.png"/>
            <span style="margin-left: -5px;">案情介绍</span>
            <i style="margin-left: -19px;">当事人、代理人介绍案情、提供证据资料</i>
          </li>
          <li><img class="line" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello2.png"/>
            <span>调查论证</span>
            <i>律石对案件资料进行必要的前期调查和分析</i>
          </li>
          <li><img class="line line2" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello3.png"/>
            <span style="margin-left: 15px;">风险评估</span>
            <i style="margin-left: 0px;">相关领域、所在地区的专家型律师评审通过案件合作</i>
          </li>
          <li><img class="line line3" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello4.png"/>
            <span style="margin-left: -8px;">诉讼垫资</span>
            <i style="margin-left: -20px;">订立协议、提起诉讼<br/>，启动法律程序维权</i>
          </li>
          <li><img class="line line4" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello5.png"/>
            <span style="margin-left: 4px;">胜诉回款</span>
            <i style="margin-left: -9px;">一审、二审、和解、执行，案件回款时按照约定比例分配</i>
          </li>
        </ul>
        
      </div>
      <div class="introListBox2">
        <img src="../../assets/images/support21.png">
        <ul class="introListBox1List">
          <li>当事人、代理人介绍案情、提供证据资料</li>
          <li>律石对案件资料进行必要的前期调查和分析</li>
          <li>相关领域、所在地区的专家型律师评审通过案件合作</li>
        </ul>
        <img class="img2" src="../../assets/images/support22.png">
        <ul class="introListBox1List2">
          <li>订立协议、提起诉讼，启动法律程序维权</li>
          <li>一审、二审、和解、执行，案件回款时按照约定比例分配</li>
        </ul>
      </div>  
    </div>
    <!-- 申请资助 -->
    <ApplyFunding></ApplyFunding>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>

import Swiper from "swiper";
import TopNavBlack from '@/components/common/TopNavBlack'
import ApplyFunding from '@/components/common/ApplyFunding'
import Bottom from '@/components/common/Bottom'
const banner1 = require('../../assets/images/banner01.png')
const banner2 = require('../../assets/images/banner02.png')
const banner3 = require('../../assets/images/banner03.png')
const banner4 = require('../../assets/images/banner04.png')
require('swiper/dist/css/swiper.css')
export default {
  name: 'Index',
  data () {
    return {
      msg: 'i am hello html',
      timer: null,
      mark: 0,
      imgData: [
        'http://dist.green-stone.cn/common/font/banner.png',
        'http://dist.green-stone.cn/common/font/banner2.png'
      ],
      swiper: [
        banner1,
        banner2
      ],
      swiperPc:[
        banner3,
        banner4
      ],
      bgColor: 'white'
    }
  },
  components:{
    TopNavBlack,
    Bottom,
    ApplyFunding
  },
  methods:{
    init:function(){
      let mySwiper = new Swiper('.swiper-container', {
        speed:300,
        autoplay : {
          delay:6000
        },
        //分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        observer: true,
        loop: true
    })

    },
  },
  mounted: function(){
    this.init();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{

}
.position{
  width:100%;
  height:115px;
  background:#fff;
  position:relative;
}
/*图片轮播容器*/
.window{
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}
#window{
  display: block;
}
.swiper-slide img{
  width: 100%;
}
#banner{
  display: none;
}
/*图片轮播盒子*/
.container{
  width: 100%;
  height: 100%;
  position: absolute;
}
.container li{
  width: 100%;
  height: 100%;
}
.container img{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
}
/*图片轮播动画*/
.image-enter-active{
  transform: opacity(0);
  transition: all 1s ease;
}
.image-leave-active{
  transform: opacity(100%);
  transition: all 0.5s ease;
}
.image-enter{
  transform: opacity(100%);
}
.image-leave{
  transform: opacity(0);
}

/*左右按钮*/
.direction{
  width: 100%;
  height: 100%;
  position: absolute;
}
.left{
  width: 29px;
  height: 29px;
  position: absolute;
  left: 38px;
  top: 50%;
  margin-top: -14px;
  cursor: pointer;
}
.right{
  width: 29px;
  height: 29px;
  position: absolute;
  right: 38px;
  top: 50%;
  margin-top: -14px;
  cursor: pointer;
}
/*图片轮播底部按钮*/
.dots{
  width: 90px;
  height: 4px;
  position: absolute;
  left: 50%;
  bottom: 30px;
  margin-left: -45px;
}
.dots li{
  width: 30px;
  height: 4px;
  background: #fff;
  cursor: pointer;
  margin-right: 15px;
  display: inline-block;
}
.dots li.dotted{
  background: #c49a6d;
}
/*诉讼资助信息介绍*/
.introduction{
  width: 800px;
  text-align: center;
  margin: 40px auto 0;
}
.introTitle{
  font-size: 21px;
  color: #c49a6d;
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
  width: 160px;
}
.introduction2 .introLine span.two{
  width: 260px;
}
.introduction3{
  display: none;
}
.introLine2 span.two{
  width: 90px;
}
.introLine span.three{
  margin-right: 0;
}
.introEng{
  color: #333;
  font-size: 14px;
  margin-bottom: 33px;
  font-weight: bold;
}
.introMessage{
  color: #333;
  font-size: 15px;
  text-align: left;
  margin-bottom: 30px;
}
/*客户/律师*/
.lawyer{
  width: 100%;
  height: 385px;
  background: #f0f0f0;
  padding-top: 34px;
}
.lawyerTop{
  width: 180px;
  height: 33px;
  display: inline-block;
  margin: 0 auto 56px;
  background: #c49a6d;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  line-height: 33px;
}
.lawyerList{
  width: 800px;
  height: 182px;
  display: flex;
  margin: 0 auto;
}
.lawyerList li{
  width: 25%
}
.lawyerTitle{
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 19px;
  margin-top: 30px;
}
.lawyerBox{
  width: 120px;
  margin: 10px auto;
  text-align: center;
  color: #333;
  font-size: 13px;
  line-height: 21px;
}
.lawyerBox1{
  display: block;
}
.lawyerBox2{
  display: none;
}
.lawyerLine{
  color: #c49a6d;
}
/*<!-- 支持 -->*/
.support .introduction{
  height: 90px;
}
.introListBox1{
  width: 100%;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  background: url('../../assets/images/lightBg.png') no-repeat;
  background-size: 100%;
}
.introListBox1 ul{
  width: 810px;
  margin: 0 auto;
  display: flex;
}
.introListBox1 li{
  // width: 90px;
}
.introListBox1 li .img{
  height: 180px;
  display: block;
}
.introListBox1 li .line{
  width: 120px;
  margin-left:  -40px;
  margin-right: -15px;
  margin-top: 170px;
  display: block;
}
.introListBox1 li .line2{
  margin-left:  -71px;
  margin-right: -28px;
}
.introListBox1 li .line3{
  margin-left:  -61px;
  margin-right: -9px;
}
.introListBox1 li .line4{
  margin-left:  -39px;
  margin-right: -15px;
}
.introListBox1 li span{
  width: 90px;
  display: block;
  color: #c49a6d;
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.introListBox1 li i{
  font-style: normal;
  width: 120px;
  margin-left: -15px;
  display: block;
  color: #333;
  text-align: center;
  color: #333;
  font-size: 13px;
  line-height: 21px;
}
.introListBox1 .introListBox1List{
  width: 58%;
  position: absolute;
  left: 50%;
  margin-left: -29%;
  display: flex;
  justify-content: space-between;
  bottom: 3rem;
  font-size: 12px;
}
.introListBox1 .introListBox1List li{
  width: 90px;
  line-height: 21px;
}
.introListBox1 .introListBox1List li:last-child{
  margin-right: 0;
}
.introListBox2{
  display: none;
}
.support .introLine .two{
  width: 160px;
}
.introList{
  width: 70%;
  height: 100px;
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: -31%;
  bottom: 10%;
}
.introList li{
  width: 20%;
  color: #c49a6d;
  font-size: 20px;
}
@media screen and (max-width: 414px) {
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
  /*图片轮播容器*/
  .window{
    width: 100%;
    height: 156px;  
    overflow: hidden;
    position: relative;
    display: none;
  }
  #window{
    display: none;
  }
  #banner{
    display: block;
  }
  .swiper-slide img{
    width: 100%;
  }
  /*图片轮播盒子*/
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .container li{
    width: 100%;
    height: 100%;
  }
  .container img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
  }
  /*图片轮播动画*/
  .image-enter-active{
    transform: opacity(0);
    transition: all 1s ease;
  }
  .image-leave-active{
    transform: opacity(100%);
    transition: all 0.5s ease;
  }
  .image-enter{
    transform: opacity(100%);
  }
  .image-leave{
    transform: opacity(0);
  }

  /*左右按钮*/
  .direction{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .left{
    width: 29px;
    height: 29px;
    position: absolute;
    left: 38px;
    top: 50%;
    margin-top: -14px;
    cursor: pointer;
    display: none;
  }
  .right{
    width: 29px;
    height: 29px;
    position: absolute;
    right: 38px;
    top: 50%;
    margin-top: -14px;
    cursor: pointer;
    display: none;
  }
  /*图片轮播底部按钮*/
  .dots{
    width: 90px;
    height: 4px;
    position: absolute;
    left: 50%;
    bottom: 30px;
    margin-left: -45px;
    display: none;
  }
  .dots li{
    width: 30px;
    height: 4px;
    background: #fff;
    cursor: pointer;
    margin-right: 15px;
    display: inline-block;
  }
  .dots li.dotted{
    background: #c49a6d;
  }
  /*诉讼资助信息介绍*/
  .introduction{
    width: 100%;
    text-align: center;
    margin: 20px auto 5px;
  }
  .introTitle{
    font-size: 20px;
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
  width: 130px;
}
.introduction2 .introLine span.two{
  width: 210px;
}
.introduction2{
  display: none;
}
.introduction3{
  display: block;
}
  .introLine2 span.two{
  width: 70px;
}
  .introLine span.three{
    margin-right: 0;
  }
  .introEng{
    font-weight: bold;
    color: #333;
    font-size: 10px;
    margin-bottom: 16px;
  }
  .introMessage{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    color: #333;
    font-size: 15px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 30px;
  }
  /*客户/律师*/
  .lawyer{
    width: 100%;
    height: 480px;
    background: #f0f0f0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .lawyerTop{
    width: 180px;
    height: 33px;
    display: inline-block;
    margin: 0 auto 13px;
    background: #c49a6d;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    line-height: 33px;
  }
  .lawyerList{
    width: 280px;
    display: flex;
    height: auto;
    flex-wrap: wrap;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .lawyerList li{
    width: 80px;
    margin: 0 30px 30px 30px;
  }
  .lawyerList li img{
    width: 80px;
    display: block;
  }
  .lawyerTitle{
    width: 100%;
    text-align: center;
    color: #333;
    font-size: 14px;
    margin-top: 15px;
  }
  .lawyerBox{
    width: 110px;
    text-align: center;
    color: #333;
    font-size: 12px;
    margin-bottom: 15px;
    margin-left: -15px;
  }
  .lawyerBox1{
    display: none;
  }
  .lawyerBox2{
    display: block;
  }
  .lawyerLine{
    color: #c49a6d;
  }
  /*<!-- 支持 -->*/
  .support .introduction{
    height: 66px;
  }
  .introListBox1{
   display: none;
  }
  .introListBox2{
    display: block;
    padding: 15px 0 30px 25px;
    background: url('../../assets/images/lightBg2.png');
    background-size: cover;
    background-position: right;
  }
  .introListBox2 img{
    display: block;
    width: 100%;
  }
  .introListBox2 img.img2{
    display: block;
    width: 66.6%;
    margin-top: 15px;
  }
  .introListBox2 .introListBox1List{
    display: flex;
    padding-right: 15px;
    font-size: 12px;
    justify-content: space-between;
  }
  .introListBox2 .introListBox1List li{
    width: 80px;
  }
  .introListBox2 .introListBox1List2{
    width: 66.6%;
    margin: 0 auto;
    display: flex;
    padding-right: 4px;
    font-size: 12px;
    justify-content: space-between;
  }
  .introListBox2 .introListBox1List2 li{
    width: 90px;
  }
  .introList{
    width: 70%;
    height: 100px;
    display: flex;
    position: absolute;
    left: 50%;
    margin-left: -31%;
    bottom: 10%;
  }
  .introList li{
    width: 20%;
    color: #c49a6d;
    font-size: 20px;
  }
}
</style>
