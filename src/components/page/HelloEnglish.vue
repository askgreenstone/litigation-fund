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
      <div class="introTitle">Litigation Support</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng"></div>
      <div class="introMessage">If you find yourself or your company involved in complicated civil or commercial legal issues, such as litigation, enforcements, bankruptcy, reorganization, liquidation events etc., and your parties cannot afford initiating or participating in the judicial proceedings due to limited financial resources, or the matter falls out of the fields or geographical areas of the existing counsels, please contact LawStone. With litigation funding, nationwide network coverage and a rich industrial resource of leading lawyers and specialists, LawStone provides one-stop dispute resolution services for clients to achieve winning outcomes.  </div>
      <div class="introMessage">With our outstanding professional teams, specialized risk management services, as well as our financing to cover fees and initial costs, LawStone helps clients and lawyers in dispute resolution situations unlock the potential value of their legal claims. A growing number of Fortune 500 companies, public companies, enterprises and individuals have benefited from LawStone Litigation Funding, which has become an increasing development in the fields of civil and commercial litigations, arbitrations, enforcements, bankruptcies and debt restructuring in China.</div>
      <div class="introMessage">Dispute resolution involves a high threshold of expertise and cost in time and resources. From time to time prolonged pending account receivables exceed statute of limitations and have to be written off, adversely affecting cashflows and turnover performance. For some, the inexperience with legal profession and judicial systems may also result in delay or even surrender of sound legal claims. </div>
      <div class="introMessage">The financial situations and legal resources among the parties involved may vary considerably, which will, to a certain extent, become obstacles to access to judicial relief. Those with tight cashflows can hardly afford legal actions. LawStone Litigation Funding is here to add value and gain a win-win result for our clients.</div>
    </div>
    <!-- 客户/律师 -->
    <!-- h5 -->
    <div class="introduction introduction2 introduction3">
      <div class="introTitle">Provide for Clients and Lawyers</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng"></div>
    </div>
    <!-- pc -->
    <div class="lawyer">
      <div class="introduction introduction2 ">
        <div class="introTitle">Provide for Clients and Lawyers</div>
        <div class="introLine">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng"></div>
      </div>
      <ul class="lawyerList">
        <li>
          <img src="../../assets/images/professionalService.png" >
          <div class="lawyerTitle">Specialized Services</div>
          <div class="lawyerBox">
            <span>We provide clients or lawyers with expertise and technical support in legal fields</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/coveringCountry.png" >
          <div class="lawyerTitle">Nationwide Coverage</div>
          <div class="lawyerBox">
            <span>A network of over 50 cities and regions in China (including Taiwan and Hong Kong)</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/resourceSupport.png" >
          <div class="lawyerTitle">Quality Services</div>
          <div class="lawyerBox">
            <span>Integral risk control services from initial due diligence to prosecution, trial and execution</span>
          </div>
        </li>
        <li>
          <img src="../../assets/images/litigation.png" >
          <div class="lawyerTitle">Litigation Funding</div>
          <div class="lawyerBox lawyerBox1">
            <span>Payment advance for litigation cost, lawyers' fee, preservation, assessment, appraisal and audit fees, etc.</span>
          </div>
          <div class="lawyerBox lawyerBox2">
            <span>Payment advance for litigation cost, lawyers' fee, preservation, assessment, appraisal and audit fees, etc.</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 支持 -->
    <div class="support">
      <div class="introduction">
        <div class="introTitle">Cooperation Procedures</div>
        <div class="introLine introLine2">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng"></div>
      </div>
      <!-- pc -->
      <div class="introListBox1">
        <ul>
          <li>
            <img class="img" src="../../assets/images/hello1.png"/>
            <span>Introduction of the Facts</span>
            <i style="margin-left: -19px;">Provide evidence and materials, introduce the case by clients or lawyers</i>
          </li>
          <li><img class="line" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello2.png"/>
            <span>Due Diligence and Analysis</span>
            <i>LawStone carry out initial investigation and analysis on the case materials and facts</i>
          </li>
          <li><img class="line line2" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello3.png"/>
            <span style="margin-left: 0px;">Risk<br/>Evaluation</span>
            <i style="margin-left: 0px;">Expert lawyers of subject regions and fields evaluate and approve litigation funding and cooperation</i>
          </li>
          <li><img class="line line3" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello4.png"/>
            <span style="margin-left: -22px;">Litigation Funding</span>
            <i style="margin-left: -28px;width:140px">Sign litigation funding agreements, file the case and initiate the legal proceedings to safeguard lawful rights and interests</i>
          </li>
          <li><img class="line line4" src="../../assets/images/hello6.png"/></li>
           <li>
            <img class="img" src="../../assets/images/hello5.png"/>
            <span style="margin-left: -14px;">Win and Execution</span>
            <i style="margin-left: -33px;width:160px">Get paid during the stages of the first instance, second instance or enforcement, distribute the proceeds in accordance with a previously agreed commission rate</i>
          </li>
        </ul>
        
      </div>
      <!-- h5 -->
      <div class="introListBox2">
        <img src="../../assets/images/support21eng.png">
        <ul class="introListBox1List">
          <li style="margin-left:20px;">Provide evidence and materials, introduce the case by clients or lawyers</li>
          <li>LawStone carry out initial investigation and analysis on the case materials and facts</li>
          <li>Expert lawyers of subject regions and fields evaluate and approve litigation funding and cooperation</li>
        </ul>
        <img class="img2" src="../../assets/images/support22eng.png">
        <ul class="introListBox1List2">
          <li style="margin-left:10px;">Sign litigation funding agreements, file the case and initiate the legal proceedings to safeguard lawful rights and interests</li>
          <li>Get paid during the stages of the first instance, second instance or enforcement, distribute the proceeds in accordance with a previously agreed commission rate</li>
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
import TopNavBlack from '@/components/common/TopNavBlackEng'
import ApplyFunding from '@/components/common/ApplyFundingEng'
import Bottom from '@/components/common/BottomEng'
const banner1 = require('../../assets/images/banner01eng.png')
const banner2 = require('../../assets/images/banner02eng.png')
const banner3 = require('../../assets/images/banner03eng.png')
const banner4 = require('../../assets/images/banner04eng.png')
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
  width: 200px;
}
.introduction2 .introLine span.two{
  width: 350px;
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
  width: 151px;
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
  width: 122px;
  display: block;
  color: #c49a6d;
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: -16px;
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
  width: 270px;
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
    font-weight: normal;
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
    font-size: 12.5px;
    line-height: 22px;
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
    width: 320px;
    display: flex;
    height: auto;
    flex-wrap: wrap;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .lawyerList li{
    width: 80px;
    margin: 0 40px 30px 40px;
  }
  .lawyerList li:nth-child(even){
    margin-left: 90px;
    margin-right: 10px;
  }
  .lawyerList li:nth-child(odd){
    margin-left: 10px;
  }
  .lawyerList li img{
    width: 70px;
    display: block;
  }
  .lawyerTitle{
    width: 140px;
    margin-left: -30px;
    text-align: center;
    color: #333;
    font-size: 14px;
    margin-top: 15px;
  }
  .lawyerBox{
    width: 140px;
    text-align: center;
    color: #333;
    font-size: 12px;
    margin-bottom: 15px;
    margin-left: -30px;
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
    background-size: contain;
  }
  .introListBox2 img{
    display: block;
    width: 90%;
  }
  .introListBox2 img.img2{
    display: block;
    width: 60%;
    margin-top: 15px;
  }
  .introListBox2 .introListBox1List{
    display: flex;
    padding-right: 15px;
    font-size: 12px;
    justify-content: space-between;
  }
  .introListBox2 .introListBox1List li{
    width: 100px;
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
    width: 110px;
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
