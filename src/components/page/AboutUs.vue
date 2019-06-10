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
        <div class="aboutChi">关于我们</div>
        <div class="aboutEng">ABOUT US</div>
      </div>
      
    </div>
    <div class="litigation">
      <img class="litigationImg" src="../../assets/images/logo3.png">
      <div class="paragraph2">关于律石</div>
      <div class="paragraph1">
        律石是由资深法律和专业人士组建成立的中国领先的诉讼资助服务机构。
      </div>
      <div class="paragraph1">
        我们在民商事诉讼、仲裁、执行、调解、破产重整和清算案件中集中优秀的法律专业资源，进行深度分析论证，制定诉讼策略，管理风控、流程，对案件涉及的诉讼费、律师费等提供资助服务。如案件胜诉或挽回损失，我们按照约定提取报酬收益；如案件败诉，资助费用由我们承担，有效化解当事人潜在的诉讼成本损失。
      </div>
      <div class="paragraph1">
        律石与律师事务所及专家顾问紧密合作，创新性地为民商事主体提供了更为灵活的费用安排和服务模式，降低经营风险和诉讼成本，为争端解决提升专业品质。
      </div>
      <div class="paragraph2">律石诉讼资助的优势</div>
      <div class="paragraph1">
        对于企业法务或本地律师有局限的重大案件或项目，律石推荐和提供覆盖各地域、各专业、资深资源和能力过硬的危机处理团队。
      </div>
      <div class="paragraph1">
        为困境当事人涉诉案件先期垫付律师费和诉讼费，实现法律成本和风险的管控和平衡。
      </div>
      <div class="paragraph1">
        为案件办理注入相关专业资源优势，增加客户对诉讼的承压能力，防止不合理或过早让渡权益、被迫妥协。
      </div>
      <div class="paragraph1">
        有利于企业与个人合理安排财务成本，加速应收账款回收，合理减少经济损失，确保有限的流动资金不被诉讼成本挤占，提升会计财务表现。
      </div>
      <div class="paragraph1">
        有效转移企业面临的诉讼成本，优化律师团队选任，诉讼风险共担，提振纠纷解决的信任和信心。
      </div>
      
      <div class="paragraph2">顶级团队</div>
      <div class="paragraph3">律石与一流的专家、律师、顾问合作，为客户提供一揽子诉讼法律事务解决方案：</div>
      <div class="paragraph4">
        <ul>
          <li><i>-  </i><span>资深诉讼律师</span></li>
          <li><i>-  </i><span>律所专业部门负责人</span></li>
          <li><i>-  </i><span>公司法务总监</span></li>
          <li><i>-  </i><span>离职司法工作人员</span></li>
          <li><i>-  </i><span>国际仲裁专家律师</span></li>
          <li><i>-  </i><span>破产重整、清算专业团队</span></li>
        </ul>
        <ul>
          <li><i>-  </i><span>法学专家、知名高校教授</span></li>
          <li><i>-  </i><span>投行、金融资深人士</span></li>
          <li><i>-  </i><span>财会、税务专业团队</span></li>
          <li><i>-  </i><span>领先的知识产权、海事海商、建筑工程、矿业能源、文化传媒、环境保护、医疗健康、反垄断、侵权赔偿等各专业领域的学科带头律师和顾问</span></li>
        </ul>
      </div>
      <div class="paragraph1 paragraph7">
        律石根植于中国蓬勃生长的法律服务市场，致力成为国际领先的诉讼资助和服务提供商。我们以响应客户需求为第一要旨，所提供的不仅是费用垫资。我们对案件项目详细分析、深入调查、专业评判，为客户带来深度、创新解决方案，平衡司法救济成本，提供法律风险管控和顾问咨询。专业引领，成就赢家！
      </div>
      
      <div class="paragraph5" style="display:none">诉讼垫资项目包括但不局限于：</div>
      <div class="paragraph4" style="display:none">
        <ul>
          <li><i>-  </i><span>律师费</span></li>
          <li><i>-  </i><span>诉讼费、仲裁申请费、保全费</span></li>
          <li><i>-  </i><span>司法鉴定费、专家证人费</span></li>
          <li><i>-  </i><span>公证费</span></li>
          <li><i>-  </i><span>审计费、评估费、拍卖费等</span></li>
        </ul>
      </div>
      <div class="paragraph6">
        <div class="more">更多资料请下载宣传册查看</div>
        <a href="http://dist.green-stone.cn/common/font/litigationSupport.pdf" download="text" class="download">下载</a>
      </div>
    </div>
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
  margin-bottom: 30px;
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
    margin: 50px auto 30px;
    border-top: 0;
    padding-top: 0;
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
    margin: 10px auto 20px;
    cursor: pointer;
  }
}
</style>
