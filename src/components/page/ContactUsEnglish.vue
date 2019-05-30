<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
    <div id="contact">
      <!-- 联系我们图片 -->
      <div class="aboutImg">
        <img src="../../assets/images/banner2.png">
        <div class="aboutImgBox">
          <div class="aboutChiPc">CONTACT US</div>
          <div class="aboutChiH5">CONTACT US</div>
          <div class="aboutEng"></div>
        </div>
        
      </div>
      <!-- 联系我们 -->
      <div class="contactBox">
        <div class="contactLeft">
          <div class="leftTitle">Contact Information</div>
          <div class="leftTitleEng"></div>
          <div class="leftMessage">Email：business@green-stone.cn<br/>WeChat Official Account : <br/>Litigation Support</div>
          <div class="leftQrcode"><img src="../../assets/images/qrcode.png"></div>
        </div>
        <div class="contactRight">
          <div class="rightTitle">Please leave your messages, we'll get back to you within 24 hours. </div>
          <div class="rightInput">
            <input type="text" v-model.trim="clientName" name="" placeholder="Name">
          </div>
          <div class="rightInput">
            <input type="text" v-model="clientTel" name="" placeholder="Telephone">
          </div>
          <div class="rightInput">
            <input type="text" v-model="clientEmail" name="" placeholder="Email">
          </div>
          <div class="rightInput">
            <input type="text" v-model.trim="clientSubject" name="" placeholder="Claim Value">
          </div>
          <div class="rightTextarea">
            <textarea cols="5" rows="3" v-model.trim="clientDemand" placeholder="Description of facts">
              
            </textarea>
          </div>
          <div class="rightButton" @click="submit">Submit</div>
        </div>
        <div class="contactLeft2">
          <div class="leftTitle">Contact Information</div>
          <div class="leftTitleEng"></div>
          <div class="leftMessage">Email：business@green-stone.cn<br/>WeChat Official Account : Litigation Support</div>
          <div class="leftQrcode"><img src="../../assets/images/qrcode.png"></div>
        </div>
      </div>  
    </div>
    
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlackEng';
import Bottom from '@/components/common/BottomEng';
import store from '@/vuex/store';
import {mapState} from 'vuex';
import axios from 'axios';
export default {
  name: 'ContactUs',
  store,
  data () {
    return {
      clientName: '',
      clientTel: '',
      clientEmail: '',
      clientSubject: '',
      clientDemand: ''
    }
  },
  computed:{
    ...mapState(['uesrname'])
  },
  methods: {
    init: function(){
      // console.log(this.username);
    },
    submit: function(event) {
      if(!this.clientName){
        alert('Please enter your name!');
        return;
      }else if(!this.clientTel){
        alert('Please enter your telephone number!');
        return;
      }else if(this.clientTel.length != 11){
        alert('Please enter your phone number!');
        return;
      }else if(!this.clientSubject){
        alert('Please enter your claim value!');
        return;
      }else if(!this.clientDemand){
        alert('Please enter your description of facts!');
        return;
      }
      // ”lfdid”:诉讼基金ID   可空   int
      // ”dName”: 姓名      string
      // ”dMobile”: 电话    string
      // ”dMail”: 邮件    string
      // ”dStandard”: 标的   string
      // ”ddesc”: 需求描述    string  
      // ”dReply”: 是否已回复  0 否  1 是    int
      var that = this;
      axios.post(common.globalUrl + '/exp/UpdatelfDemand.do', {
        "lfdid": 0,
        "dName": that.clientName,
        "dMobile": that.clientTel,
        "dMail": that.clientEmail,
        "dStandard": that.clientSubject,
        "ddesc": that.clientDemand,
        "dReply": 0
      })
      .then(function (success) {
        // console.log(success);
        alert('Submitted successfully!')
      })
      .catch(function (error) {
        alert('Network connection error or server exception!');
      });

    }
  },
  
  mounted:function(){
    this.init();
  },
  components:{
    TopNavBlack,
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
/*联系我们图片*/
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
  width: 160px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -80px;
}
.aboutChiPc{
  width: 160px;
  height: 30px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
  display: block;
}
.aboutChiH5{
  display: none;
}
.aboutEng{
  width: 160px;
  height: 22px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
}
/*联系我们*/
.contactBox{
  width: 800px;
  height: 500px;
  margin: 0 auto;
  padding-top: 45px;
}
.contactLeft{
  width: 300px;
  float: left;
}
.contactLeft2{
  display: none;
}
.leftTitle{
  color: #333;
  font-size: 23px;
}
.leftTitleEng{
  color: #c49a6d;
  font-size: 17px;
  margin-bottom: 25px;
}
.leftMessage{
  color: #333;
  font-size: 15px;
  line-height: 2;
  margin-bottom: 25px;
}
.leftQrcode{
  width: 110px;
}
.leftQrcode img{
  width: 110px;
}
.contactRight{
  width: 500px;
  float: left;
}
.rightTitle{
  color: #333;
  font-size: 21px;
}
.rightInput{
  width: 480px;
  height: 29px;
  border: 1px solid #ccc;
  margin: 15px 0;
}
.rightInput input{
  border: none;
  width: 478px;
  height: 27px;
  line-height: 28px;
  color: #979797;
  font-size: 14px;
  text-indent: 10px;
}
.rightTextarea{
  width: 480px;
  height: 170px;
  border: 1px solid #ccc;
  margin: 15px 0;
}
.rightTextarea textarea{
  border: none;
  resize: none;
  width: 476px;
  height: 166px;
  line-height: 22px;
  color: #979797;
  text-indent: 8px;
  font-size: 14px;
}
.rightButton{
  width: 115px;
  height: 35px;
  border: 1px solid #c49a6d;
  text-align: center;
  line-height: 35px;
  color: #c49a6d;
  font-size: 15px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}
@media screen and (max-width:414px){
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
  /*联系我们图片*/
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
    width: 100px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -40px;
    padding-top: 35px;
  }
  .aboutChiH5{
    width: 130px;
    display: block;
    height: 24px;
    text-align: center;
  font-weight: bold;
    color: #333;
    font-size: 18px;
    border-bottom: 1px solid #c49a6d;
    margin-left: -15px;
  }
  .aboutChiPc{
    display: none;
  }
  .aboutEng{
    width: 100px;
    height: 22px;
    text-align: center;
  font-weight: bold;
    color: #333;
    font-size: 12px;
  }
  /*联系我们*/
  .contactBox{
    width: 100%;
    min-height: 750px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .contactLeft{
    width: 100%;
    padding: 0 15px 15px;
    box-sizing: border-box;
    display: none;
  }
   .contactLeft2{
    width: 100%;
    padding: 0 15px 15px 37px;
    box-sizing: border-box;
    display: block;
  }
  .leftTitle{
    color: #333;
    font-size: 16px;
    font-weight: bold;
  }
  .leftTitleEng{
    color: #c49a6d;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .leftMessage{
    color: #333;
    font-size: 15px;
    line-height: 21px;
    margin-bottom: 25px;
  }
  .leftQrcode{
    width: 110px;
  }
  .leftQrcode img{
    width: 110px;
  }
  .contactRight{
    width: 100%;
    padding: 0 15px 15px;
    box-sizing: border-box;
  }
  .rightTitle{
    color: #333;
    font-size: 14px;
    font-weight: bold;
    margin-left: 22px;
  }
  .rightInput{
    width: 300px;
    height: 36px;
    border: 1px solid #ccc;
    margin: 15px 22px;
  }
  .rightInput input{
    border: none;
    width: 280px;
    height: 24px;
    margin-top: 6px;
    line-height: 24px;
    color: #979797;
    font-size: 14px;
    text-indent: 8px;
    padding: 0;
  }
  .rightTextarea{
    width: 300px;
    height: 170px;
    border: 1px solid #ccc;
    margin: 15px 22px;



    
  }
  .rightTextarea textarea{
    border: none;
    resize: none;
    width: 296px;
    height: 166px;
    line-height: 22px;
    color: #979797;
    text-indent: 8px;
    font-size: 14px;
  }
  .rightButton{
    width: 80px;
    height: 30px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 30px;
    color: #c49a6d;
    font-size: 13px;
    background: #fff;
    cursor: pointer;
    border-radius: 3px;
    margin: 20px 0 25px 22px;
  }
}
</style>
