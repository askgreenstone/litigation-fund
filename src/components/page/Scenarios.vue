<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
    <!-- 应用场景 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">应用案例</div>
        <div class="aboutEng">CASE AND APPLICATIONS</div>
      </div>
      
    </div>
    <!-- 案例列表 -->
    <ul class="caseList">
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case1.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">公司法 – 股东出资</div>
          <div class="caseContent">某规模企业因投资在建工程陷入财务困境，需要对外清偿债务、资金周转困难。经查该企业历史情况复杂，前几届股东有巨额出资，后滚动撤资或安排交易转移，涉及大量调查取证和跨时间、跨地域交叉法律关系。律石诉讼资助为现有股东和公司提供了一揽子解决方案，由涉案所在地律师团队无缝隙对接，垫资启动司法救济，向原股东追索出资款和挪用资金，盘活了企业周转</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case2.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">知识产权 – 侵权与抗辩</div>
          <div class="caseContent">某创业公司被诉核心技术知识产权侵权，该公司正处于融资和市场攻坚阶段。律石经聘请资深专业知识产权律师分析和研判案情，为创始人安排了一应成本垫资及办案团队，使得创业公司得以集中有限的资源专注于业绩和融资谈判。诉讼中，律师代理创业公司成功抗辩、提起反诉并赢得赔偿</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case3.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">资本市场 – 股权纷争</div>
          <div class="caseContent">某上市公司创始人猝然离世，所持控股股权在原配、现任、子女、管理层及数个期权平台实体间陷入纷争，非内部人一方被排除在股东会、董事会及公司经营之外，寻求律石诉讼资助。律石邀请公司法和资本市场专家型律师清理了前期创始人股东潜在的对赌、代持、低价转股承诺等风险，明晰和落实了法定继承股份权益及其证明文件，与现有管理层和意向投资人多方谈判，为客户实现二级市场解封变现退出</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case4.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">债务重组 – 破产重整</div>
          <div class="caseContent">某矿业集团企业资产负债率高企，现金流无力支撑银行利息和财务费用，金融债权人组成债委会对其进行债务重组，谈判久拖不决。律石诉讼资助安排国内顶尖的重组专家团队介入后，为集团核心资产某大型露天煤矿提供了司法破产重整的解决方案，并根据最高人民法院相关规定垫付了管理人报酬和管理人执行职务费用。六个月后，重整计划经各类债权人表决通过执行，企业脱困重生</div>
        </div>
      </li>
    </ul>
    <!-- 移动端案例列表 -->
    <ul class="caseListMobile">
      <li>
          <div class="caseTitle">公司法 – 股东出资</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某规模企业因投资在建工程陷入财务困境，需要对外清偿债务、资金周转困难。经查该企业历史情况复杂，前几届股东有巨额出资，后滚动撤资或安排交易转移，涉及大量调查取证和跨时间、跨地域交叉法律关系。律石诉讼资助为现有股东和公司提供了一揽子解决方案，由涉案所在地律师团队无缝隙对接，垫资启动司法救济，向原股东追索出资款和挪用资金，盘活了企业周转</div>
      </li>
      <li>
          <div class="caseTitle">知识产权 – 侵权与抗辩</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某创业公司被诉核心技术知识产权侵权，该公司正处于融资和市场攻坚阶段。律石经聘请资深专业知识产权律师分析和研判案情，为创始人安排了一应成本垫资及办案团队，使得创业公司得以集中有限的资源专注于业绩和融资谈判。诉讼中，律师代理创业公司成功抗辩、提起反诉并赢得赔偿</div>
      </li>
      <li>
          <div class="caseTitle">资本市场 – 股权纷争</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某上市公司创始人猝然离世，所持控股股权在原配、现任、子女、管理层及数个期权平台实体间陷入纷争，非内部人一方被排除在股东会、董事会及公司经营之外，寻求律石诉讼资助。律石邀请公司法和资本市场专家型律师清理了前期创始人股东潜在的对赌、代持、低价转股承诺等风险，明晰和落实了法定继承股份权益及其证明文件，与现有管理层和意向投资人多方谈判，为客户实现二级市场解封变现退出</div>
      </li>
      <li>
          <div class="caseTitle">债务重组 – 破产重整</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某矿业集团企业资产负债率高企，现金流无力支撑银行利息和财务费用，金融债权人组成债委会对其进行债务重组，谈判久拖不决。律石诉讼资助安排国内顶尖的重组专家团队介入后，为集团核心资产某大型露天煤矿提供了司法破产重整的解决方案，并根据最高人民法院相关规定垫付了管理人报酬和管理人执行职务费用。六个月后，重整计划经各类债权人表决通过执行，企业脱困重生</div>
      </li>
    </ul>
    <!-- 申请资助 -->
    <ApplyFunding></ApplyFunding>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import ApplyFunding from '@/components/common/ApplyFunding'
import Bottom from '@/components/common/Bottom'
export default {
  name: 'Scenarios',
  data () {
    return {
      loginFlag: false
    }
  },
  methods: {
    init: function(){
    }
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
/*应用场景图片*/
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
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -80px;
}
.aboutChi{
  width: 200px;
  height: 30px;
  text-align: center;
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 200px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
}
/*案例列表*/
.caseList{
  width: 800px;
  height: auto;
  margin: 0 auto;
  padding-top: 50px;
}
.caseList li{
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 18px;
}
.caseList li:last-child{
  border-bottom: 0;
}
.caseListLeft{
  width: 197px;
  height: 130px;
  margin-right: 25px;
  margin-bottom: 19px; 
}
.caseListLeft img{
  height: 90%;
  margin-top: 5%;
}
.caseListRight{
  width: 575px;
}
.caseListMobile{
  display: none;
}
.caseTitle{
  font-family: 'Medium';
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}
.caseContent{
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
}
@media screen and (max-width:414px){
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
  /*应用场景图片*/
  .aboutImg{
    width: 100%;
    height: 255px;
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
    width: 160px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -80px;
    padding-top: 35px;
  }
  .aboutChi{
    width: 160px;
    height: 24px;
    text-align: center;
    font-family: 'Medium';
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutEng{
    width: 160px;
    height: 22px;
    text-align: center;
    font-family: 'Regular';
    color: #333;
    font-size: 12px;
  }
  /*案例列表*/
  .caseList{
    width: 100%;
    height: auto;
    margin: 55px auto 0;
    padding-top: 50px;
    display: none;
  }
  .caseList li{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 18px;
  }
  .caseList li:last-child{
    border-bottom: 0;
  }
  .caseListLeft{
    width: 60px;
    margin-right: 15px;
    margin-bottom: 19px; 
  }
  .caseListLeft img{
    width: 100%;
    display: block;
  }
  .caseListRight{
    flex: 1;
    padding-right: 15px;
  }
  .caseListMobile{
    display: block;
    width:100%;
    padding: 20px;
    margin: 0 auto 0;
    box-sizing: border-box;
  }
  .caseListMobile .caseTitle{
    margin-bottom: 5px;
  }
  .caseListMobile img{
    width: 100%;
    position: relative;
    top: -10px;
  }
  .caseTitle{
    font-family: 'Medium';
    color: #333;
    font-size: 18px;
    margin: 5px 0 15px
  }
  .caseContent{
    font-family: 'Normal';
    color: #333;
    font-size: 15px;
    margin-bottom: 30px;
  }
}


</style>
