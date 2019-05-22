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
        <div class="caseListBox">
          <div class="caseListBoxLeft">
            <img class="imgFirst" src="../../assets/images/case01.jpg">
          </div>
          <div class="caseListBoxRight">
            <div class="caseListBoxRightTitle">公司法 – 股东出资</div>
            <div class="caseListBoxRightContent">某规模企业因投资在建工程陷入财务困境，需要对外清偿债务、资金周转困难。该企业历史情况复杂，前几届股东有巨额出资，后滚动撤资或安排交易转移，涉及大量调查取证和跨时间、跨地域交叉法律关系。律石诉讼资助可以根据情况为现有股东和公司提供一揽子解决方案，聘请涉案所在地律师团队无缝隙对接，垫资启动司法救济，向原股东追索出资款和挪用资金。</div>
          </div>
        </div>
        <img src="../../assets/images/case55.png">
      </li>
      <li>
        <div class="caseListBox">
          <div class="caseListBoxLeft">
            <img class="imgFirst" src="../../assets/images/case02.jpg">
          </div>
          <div class="caseListBoxRight">
            <div class="caseListBoxRightTitle">知识产权 – 侵权与抗辩</div>
            <div class="caseListBoxRightContent">某创业公司被诉核心技术知识产权侵权，而公司正处于融资和市场攻坚阶段，时间和成本、专业资源均难以应对。律石诉讼资助服务可以邀请资深专业知识产权律师分析和研判案情，为创始人安排一应成本垫资及办案团队，使得创业公司得以集中有限的资源专注于业绩、市场、运营和融资谈判。</div>
          </div>
        </div>
        <img src="../../assets/images/case55.png">
      </li>
      <li>
        <div class="caseListBox">
          <div class="caseListBoxLeft">
            <img class="imgFirst" src="../../assets/images/case03.jpg">
          </div>
          <div class="caseListBoxRight">
            <div class="caseListBoxRightTitle">民事侵权 – 环境保护</div>
            <div class="caseListBoxRightContent">某内蒙古牧民享有数千亩林地和草原的使用权和承包权，该地块遭受土壤污染、地下水漫灌、林木毁损，疑似当地煤炭企业越界开采、多处打井、向地下灌注煤矸石混合物所致。律石诉讼资助可帮助受害方安排污染取证、鉴定、专家型律师、垫资起诉等一应法律事务，依法维权。</div>
          </div>
        </div>
        <img src="../../assets/images/case55.png">
      </li>
      <li>
        <div class="caseListBox">
          <div class="caseListBoxLeft">
            <img class="imgFirst" src="../../assets/images/case04.jpg">
          </div>
          <div class="caseListBoxRight">
            <div class="caseListBoxRightTitle">债务重组 – 破产重整</div>
            <div class="caseListBoxRightContent">某矿业集团企业资产负债率高企，现金流无力支撑银行利息和财务费用，金融债权人组成债委会对其进行债务重组，谈判久拖不决。诉讼资助可以安排重组专家团队介入，为集团提供司法破产重整的解决方案，并根据最高人民法院相关规定垫付管理人报酬和管理人执行职务费用，促成重整计划通过各类债权人表决并执行。</div>
          </div>
        </div>
        <img src="../../assets/images/case55.png">
      </li>
    </ul>
    <!-- 移动端案例列表 -->
    <ul class="caseListMobile">
      <li>
          <div class="caseTitle">公司法 – 股东出资</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某规模企业因投资在建工程陷入财务困境，需要对外清偿债务、资金周转困难。该企业历史情况复杂，前几届股东有巨额出资，后滚动撤资或安排交易转移，涉及大量调查取证和跨时间、跨地域交叉法律关系。律石诉讼资助可以根据情况为现有股东和公司提供一揽子解决方案，聘请涉案所在地律师团队无缝隙对接，垫资启动司法救济，向原股东追索出资款和挪用资金。</div>
      </li>
      <li>
          <div class="caseTitle">知识产权 – 侵权与抗辩</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某创业公司被诉核心技术知识产权侵权，而公司正处于融资和市场攻坚阶段，时间和成本、专业资源均难以应对。律石诉讼资助服务可以邀请资深专业知识产权律师分析和研判案情，为创始人安排一应成本垫资及办案团队，使得创业公司得以集中有限的资源专注于业绩、市场、运营和融资谈判。</div>
      </li>
      <li>
          <div class="caseTitle">民事侵权 – 环境保护</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某内蒙古牧民享有数千亩林地和草原的使用权和承包权，该地块遭受土壤污染、地下水漫灌、林木毁损，疑似当地煤炭企业越界开采、多处打井、向地下灌注煤矸石混合物所致。律石诉讼资助可帮助受害方安排污染取证、鉴定、专家型律师、垫资起诉等一应法律事务，依法维权。</div>
      </li>
      <li>
          <div class="caseTitle">债务重组 – 破产重整</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">某矿业集团企业资产负债率高企，现金流无力支撑银行利息和财务费用，金融债权人组成债委会对其进行债务重组，谈判久拖不决。诉讼资助可以安排重组专家团队介入，为集团提供司法破产重整的解决方案，并根据最高人民法院相关规定垫付管理人报酬和管理人执行职务费用，促成重整计划通过各类债权人表决并执行。</div>
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
  width: 220px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -110px;
}
.aboutChi{
  width: 220px;
  height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 220px;
  height: 22px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
}
/*案例列表*/
.caseList{
  width: 900px;
  height: auto;
  margin: 0 auto;
  padding-top: 50px;
}
.caseList li{
  width: 100%;
  // display: flex;
  // border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
}
.caseList li .caseListBox{
  width: 100%;
  display: flex;
}
.caseListBoxLeft{
  width: 215px;
  margin-right: 20px;
}
.caseListBoxLeft img{
  display: block;
  
}
.caseListBoxRight{
  flex: 1;
}
.caseListBoxRight .caseListBoxRightTitle{
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 14px;
}
.caseListBoxRight .caseListBoxRightContent{
  font-size: 14px;
  line-height: 28px;
}
.caseList li .imgFirst{
  margin-bottom: 20px;
}
.caseList li:last-child{
  border-bottom: 0;
}
.caseListLeft{
  width: 197px;
  height: 130px;
  margin-right: 25px;
  margin-bottom: 25px; 
}
.caseListLeft img{
  width: 175px;
  display: block;
  margin-top: 5%;
}
.caseListRight{
  width: 575px;
}
.caseListMobile{
  display: none;
}
.caseTitle{
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
.caseContent{
  color: #333;
  font-size: 13px;
  line-height: 26px;
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
    width: 180px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -80px;
    padding-top: 35px;
  }
  .aboutChi{
    width: 180px;
    height: 24px;
    text-align: center;
  font-weight: bold;
    color: #c49a6d;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutEng{
    width: 180px;
    height: 22px;
    text-align: center;
    font-weight: bold;
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
    font-weight: bold;
    margin-bottom: 15px;
  }
  .caseListMobile img{
    width: 100%;
    position: relative;
    top: -10px;
  }
  .caseTitle{
    color: #333;
    font-size: 15px;
    font-weight: bold;
    margin: 5px 0 15px;
  }
  .caseContent{
    color: #333;
    font-size: 15px;
    margin-bottom: 45px;
  }
}
@media screen and (max-width:414px){
  /*应用场景图片*/
  .aboutImg{
    width: 100%;
    position: relative;
    margin-bottom: 0;
  }
  .aboutImg img{
    width: 100%;
    position: relative;
    top: 0;
  }
  .aboutImgBox{
    width: 160px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -80px;
  }
  .aboutChi{
    width: 160px;
    height: 30px;
    text-align: center;
    font-family: 'Medium';
    color: #fff;
    font-size: 22px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutEng{
    width: 160px;
    height: 22px;
    text-align: center;
    font-family: 'Regular';
    color: #fff;
    font-size: 16px;
  }
  /*案例列表*/
  .caseList{
    width: 100%;
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
  }
}


</style>
