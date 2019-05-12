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
        <div class="aboutChiPc">CASE AND APPLICATIONS</div>
        <div class="aboutChiH5">CASE AND APPLICATIONS</div>
        <div class="aboutEng"></div>
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
            <div class="caseListBoxRightTitle">Corporate Law – Shareholder Contribution</div>
            <div class="caseListBoxRightContent">A large-scale enterprise ran into financial distress due to investment in real estate constructions. The matured debts resulted in difficulties of cash flow and turnover. LawStone found that the enterprise had a complex shareholding history where the previous shareholders subscribed shares with substantial capital, later misappropriated the capital through rolling transactions and asset transfers. The case involved complex legal nexus and facts across time and regions. After necessary due diligence, LawStone provided an one-stop solution to the company, engaged competent legal teams seamlessly cooperating in relevant areas, paid off the litigation cost and lawyers’ fees, restored the capital from the previous shareholders. The company was able to revive and recover. </div>
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
            <div class="caseListBoxRightTitle">Intellectual Property – Infringement and Defense</div>
            <div class="caseListBoxRightContent">A start-up company was sued for infringement of intellectual property which was the core technology of its business, while the company was in a crucial stage of financing and business development. It could not afford the lawsuit in terms of both expenditure, time and legal resources. LawStone invited senior IP experts analyzed and evaluated the situation, arranged comprehensive funding and strategy for the founders, so that to allow the start-up to focus on marketing, operation and financial performance. The lawsuit was successfully defended. LawStone further helped the company filed a counterclaim, the court returned a verdict in favor of the start-up with a substantive compensation.  </div>
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
            <div class="caseListBoxRightTitle">Capital Markets – Equity Disputes</div>
            <div class="caseListBoxRightContent">The founder of a listed company passed away unexpectedly, leaving his controlling stake contested among the children, the management and several ESOP platforms. When seeking LawStone services, the non-insiders were excluded from the shareholders meetings, the Board of Directors and the company operations. LawStone invited corporate law and capital market expert lawyers, cleaned up the potential risks of share adjustment, entrusted shareholding and low-price conversion of the founders’ shares, clarified the legal succession equity rights, solidified the supporting instruments, engaged multi-party negotiations with the existing management team and interested investors, eventually cashed out in capital market for the client. </div>
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
            <div class="caseListBoxRightTitle">Debt Restructuring – Bankruptcy Reorganization</div>
            <div class="caseListBoxRightContent">In a debt restructuring situation, the debt-to-assets ratio of the debtor (a mining group enterprise) reached 92%, causing any cash flow and revenue could not cover the debt interests and financial cost. The institutional creditors formed a debt restructuring commission and the negotiations were protracted. LawStone arranged top restructuring professionals to assist. After necessary due diligence, the team formulated a judicial bankruptcy restructuring solution for the group's core business - a large open-pit coal mine enterprise. LawStone in turn paid the fees and remunerations charged by the bankruptcy administration and take-over commission in accordance with the relevant provisions of the Supreme People's Court. Six months later, the reorganization plan was approved by the creditors of different classifications in the judicial bankruptcy proceedings. The enterprise was reborn and regained a positive financial position.  </div>
          </div>
        </div>
        <img src="../../assets/images/case55.png">
      </li>
    </ul>
    <!-- 移动端案例列表 -->
    <ul class="caseListMobile">
      <li>
          <div class="caseTitle">Corporate Law – Shareholder Contribution</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">A large-scale enterprise ran into financial distress due to investment in real estate constructions. The matured debts resulted in difficulties of cash flow and turnover. LawStone found that the enterprise had a complex shareholding history where the previous shareholders subscribed shares with substantial capital, later misappropriated the capital through rolling transactions and asset transfers. The case involved complex legal nexus and facts across time and regions. After necessary due diligence, LawStone provided an one-stop solution to the company, engaged competent legal teams seamlessly cooperating in relevant areas, paid off the litigation cost and lawyers’ fees, restored the capital from the previous shareholders. The company was able to revive and recover.</div>
      </li>
      <li>
          <div class="caseTitle">Intellectual Property – Infringement and Defense</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">A start-up company was sued for infringement of intellectual property which was the core technology of its business, while the company was in a crucial stage of financing and business development. It could not afford the lawsuit in terms of both expenditure, time and legal resources. LawStone invited senior IP experts analyzed and evaluated the situation, arranged comprehensive funding and strategy for the founders, so that to allow the start-up to focus on marketing, operation and financial performance. The lawsuit was successfully defended. LawStone further helped the company filed a counterclaim, the court returned a verdict in favor of the start-up with a substantive compensation.</div>
      </li>
      <li>
          <div class="caseTitle">Capital Markets – Equity Disputes</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">The founder of a listed company passed away unexpectedly, leaving his controlling stake contested among the children, the management and several ESOP platforms. When seeking LawStone services, the non-insiders were excluded from the shareholders meetings, the Board of Directors and the company operations. LawStone invited corporate law and capital market expert lawyers, cleaned up the potential risks of share adjustment, entrusted shareholding and low-price conversion of the founders’ shares, clarified the legal succession equity rights, solidified the supporting instruments, engaged multi-party negotiations with the existing management team and interested investors, eventually cashed out in capital market for the client. </div>
      </li>
      <li>
          <div class="caseTitle">Debt Restructuring – Bankruptcy Reorganization</div>
          <img src="../../assets/images/caseImg.png">
          <div class="caseContent">In a debt restructuring situation, the debt-to-assets ratio of the debtor (a mining group enterprise) reached 92%, causing any cash flow and revenue could not cover the debt interests and financial cost. The institutional creditors formed a debt restructuring commission and the negotiations were protracted. LawStone arranged top restructuring professionals to assist. After necessary due diligence, the team formulated a judicial bankruptcy restructuring solution for the group's core business - a large open-pit coal mine enterprise. LawStone in turn paid the fees and remunerations charged by the bankruptcy administration and take-over commission in accordance with the relevant provisions of the Supreme People's Court. Six months later, the reorganization plan was approved by the creditors of different classifications in the judicial bankruptcy proceedings. The enterprise was reborn and regained a positive financial position. </div>
      </li>
    </ul>
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
  width: 300px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -150px;
}
.aboutChiPc{
  width: 300px;
  display: block;
  height: 30px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutChiH5{
  display: none;
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
    width: 250px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -125px;
    padding-top: 35px;
  }
  .aboutChiH5{
    width: 250px;
    display: block;
    height: 24px;
    text-align: center;
  font-weight: bold;
    color: #333;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutChiPc{
    display: none;
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


</style>
