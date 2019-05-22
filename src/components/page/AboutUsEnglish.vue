<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack v-bind:bgColor="bgColor"></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
    <!-- 关于我们正文 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">ABOUT US</div>
        <div class="aboutEng"></div>
      </div>
      
    </div>
    <div class="litigation">
      <img class="litigationImg" src="../../assets/images/logo3.png">
      <div class="paragraph2">About LawStone</div>
      <div class="paragraph1">
        LawStone is a leading litigation service provider established by prominent legal and financial professionals
      </div>
      <div class="paragraph1">
        We draw together outstanding legal professionals and resources in areas of civil and commercial litigations, arbitrations, enforcements, mediations, bankruptcy restructuring and liquidation matters, perform in-depth analyses of the cases, formulate litigation strategies, manage risks, and provide financial support on litigation costs, attorney fees and other expenses in dispute resolutions. If the case wins and the losses are recovered, we withhold our service fees from the proceeds according to previously agreed upon compensation rates. If the case loses, we bear the expenses without recourses, thereby effectively protect our clients from potential loss of litigation expenses.
      </div>
      <div class="paragraph1">
        We work closely with law firms, experts and specialists to provide flexible fee arrangements under a one-stop shopping litigation service package in civil and commercial judicial matters, reduce operational risks and litigation costs, and enhance the quality of legal services for individual and enterprise clients.
      </div>
      <div class="paragraph2">Merits of LawStone Litigation Funding</div>
      <div class="paragraph1">
        For complex or intractable situations exceeding the calibers of the in-house or local lawyers, LawStone recommends and provides outstanding professional teams that cover various regions and specialties to resolve the problems.
      </div>
      <div class="paragraph1">
        Litigation financing provides distressed clients with advances in attorney fees and litigation costs, keeping the legal risk under control with balanced financials of the clients.
      </div>
      <div class="paragraph1">
        We bring leading professional expertise into dispute resolutions, increase the capacities of our clients under high pressure and prevent unnecessary or premature transfer of rights and interests, or forced concessions or compromises. 
      </div>
      <div class="paragraph1">
        LawStone Litigation Funding facilitates the financial arrangements of individuals and enterprises, accelerates account receivable recoveries, minimizes economic impacts, and ensures that liquidity is not squeezed by litigation costs, in order to improve accounting and financial performance. 
      </div>
      <div class="paragraph1">
        LawStone effectively transfers litigation costs, optimizes legal team composition, resolves litigation risks, and builds trust and confidence of our clients in dispute resolutions.
      </div>
      
      <div class="paragraph2">Top Professionals</div>
      <div class="paragraph3">LawStone works closely with leading experts, lawyers and specialists to provide clients with a packaged solution of litigation affairs, including:</div>
      <div class="paragraph4">
        <ul>
          <li><i>-  </i><span>Senior litigation lawyers</span></li>
          <li><i>-  </i><span>Heads of law firm litigation departments</span></li>
          <li><i>-  </i><span>In-house, general counsels</span></li>
          <li><i>-  </i><span>Former staff of the judicial system</span></li>
          <li><i>-  </i><span>Solicitors of international arbitration</span></li>
          <li><i>-  </i><span>Bankruptcy, reorganization and liquidation specialists</span></li>
        </ul>
        <ul>
          <li><i>-  </i><span>Legal experts, famed professors</span></li>
          <li><i>-  </i><span>Investment bankers, senior financial professionals</span></li>
          <li><i>-  </i><span>Accounting, tax experts</span></li>
          <li><i>-  </i><span>Leading lawyers and counsels in the fields of intellectual property, maritime and marine, infrastructure and construction, mining and energy, media, environment, medical and health, tort and compensation, etc</span></li>
        </ul>
      </div>
      <div class="paragraph1 paragraph7">
        Rooted in China's booming legal services market, LawStone is committed to be the leading litigation financing and service provider in the global market place. Client’s needs are our top priority. What we provide is not limited to case funding. We carry out in-depth investigations and evaluations of the cases, bring specialized and innovative solutions to our clients, help to mitigate the cost of judicial proceedings, advise on risk control and legal process. We help our clients to Win.
      </div>
      <div class="paragraph6">
        <div class="more">Download LawStone Litigation Support Brochure</div>
        <a href="http://dist.green-stone.cn/common/font/litigationSupport.pdf" download="text" class="download">Download</a>
      </div>
    </div>
    <!-- 申请资助 -->
    <ApplyFunding></ApplyFunding>
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
      loginFlag: false,
      bgColor: "black"
    }
  },
  methods: {
    init: function(){
      // console.log(this.$route.params);
      // console.log(this.$route.query);
      var ownUri = this.$route.params.ownUri;
      // console.log(ownUri);
    }
  },
  mounted:function(){
    this.init();
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
/*关于我们图片*/
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
.aboutImgBox{
  width: 120px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -60px;
}
.aboutChi{
  width: 120px;
  height: 30px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 120px;
  height: 22px;
  text-align: center;
    font-weight: bold;
  color: #fff;
  font-size: 16px;
}
/*段落简介*/
.litigationImg{
  height: 70px;
  display: block;
  margin: 30px auto;
}
.paragraph1{
  width: 63%;
  margin: 0 auto;
  color: #333;
  font-size: 15px;
  // text-indent: 30px;
  line-height: 1.8;
  margin-top: 25px;
}
.paragraph2{
  width: 63%;
  margin: 40px auto 25px;
  color: #c49a6d;
  font-size: 24px;
  font-weight: bold;
}
.paragraph3{
  width: 63%;
  margin: 0 auto 20px;
  color: #333;
  font-size: 15px;
}
.paragraph4{
  width: 63%;
  display: flex;
  margin: 0 auto;
}
.paragraph4 ul{
  width: 45%;
  color: #333;
  font-size: 15px;
  line-height: 2;
}
.paragraph4 ul li i{
  width: 5%;
  display: inline-block;
  float: left;
  font-style: normal;
}
.paragraph4 ul li span{
  width: 95%;
  display: inline-block;
  float: left;
}
.paragraph5{
  width: 63%;
  margin: 35px auto 20px;
  color: #333;
  font-size: 15px;
}
.paragraph6{
  width: 63%;
  margin: 20px auto;
  border-top: 1px solid #ccc;
  padding-top: 30px;
}
.paragraph7{
  margin-bottom: 50px;
}
.more{
  width: 100%;
  color: #c49a6d;
  font-size: 16px;
  text-align: center;
}
.download{
  display: block;
  width: 100px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 13px;
  color: #fff;
  font-size: 12px;
  background: #c49a6d;
  margin: 10px auto 50px;
  cursor: pointer;
}
@media screen and (max-width: 414px) {
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
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
  .aboutImgBox{
    width: 120px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -60px;
    display: none;
  }
  .aboutChi{
    width: 120px;
    height: 30px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutEng{
    width: 120px;
    height: 22px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    font-size: 16px  ;
  }
  /*段落简介*/
  .litigation{
    width: 100%;
  }
  .litigationImg{
    height: 50px;
    display: block;
    margin: 40px auto;
  }
  .paragraph1{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box; 
    margin: 0 auto;
    color: #333;
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 25px;
  }
  .paragraph7{
  margin-bottom: 50px;
}
  .paragraph2{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 20px auto 30px;
    color: #c49a6d;
    font-size: 24px;
    font-weight: bold;
  }
  .paragraph3{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto 10px;
    color: #333;
    font-size: 15px;
  }
  .paragraph4{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    display: block;
    margin: 0 auto 20px;
  }
  .paragraph4 ul{
    width: 100%;
    color: #333;
    font-size: 15px;
    line-height: 2;
  }
  .paragraph4 ul li{
    display: flex;
  }
  .paragraph4 ul li i{
    width: 5%;
    display: inline-block;
    font-style: normal;
  }
  .paragraph4 ul li span{
    width: 95%;
    display: inline-block;
  }
  .paragraph5{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto 10px;
    color: #333;
    font-size: 15px;
  }
  .paragraph6{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 10px auto;
    border-top: 1px solid #ccc;
    padding-top: 30px;
    display: none;
  }
  .more{
    width: 100%;
    color: #c49a6d;
    font-size: 16px;
    text-align: center;
  }
  .download{
    display: block;
    width: 186px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border-radius: 13px;
    color: #fff;
    font-size: 12px;
    background: #c49a6d;
    margin: 10px auto 50px;
    cursor: pointer;
  }
}
</style>
