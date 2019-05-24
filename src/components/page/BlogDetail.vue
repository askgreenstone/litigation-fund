<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
    <!-- 团队／顾问 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">律石研究院</div>
        <div class="aboutEng">LS INSTITUTE</div>
      </div>
    </div>
    <!-- 律石研究院文章详情 -->
    <div v-if="nDocName" class="contentBox">
      <a :href=nOSSDocName download>点击下载 PDF</a>
      <div id="reader"></div>
    </div>
    <div v-else class="contentBox">
      <div class="infoTitle">
        <router-link tag="span" class="editBtn" :to="{path:'/Blog'}">律石研究院 > </router-link><span class="information">{{nTitle}}</span>
      </div>
      <div class="title">{{nTitle}}</div>
      <div class="date">{{dts}}</div>
      <div class="content">
        <pre>
          {{nContent}}
        </pre>
      </div>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: 'BlogDetail',
  store,
  data () {
    return {
      lfnid : 0,
      nTitle : '',
      nContent : '',
      nPicture : '',
      nDocName : '',
      nOSSDocName : '',
      baiduDocID : '',
      extDocType : '',
      dts: '',
    }
  },
  computed:{
    ...mapState[('username')]
  },
  methods: {
    init: function(){
    },
    // textarea转换保留空格和换行
    textareaTo: function(str){
      var reg=new RegExp("<br>","g");
      var regSpace=new RegExp("&nbsp;","g");
      str = str.replace(reg,"\n");
      str = str.replace(regSpace," ");
      return str;
    },
    // lfnid : 诉讼基金新闻ID      int
    // nTitle :  标题     String
    // nContent :  内容        String
    // nPicture :  图片    String
    // nDocName :  附件名    String
    // baiduDocID :  百度附件ID    String
    // extDocType :  附件扩展名    String
    // 获取某条新闻详细信息
    getInforDetail: function(lfnid){
      var that = this;
      //  enorcn  1中文  2英文
      axios.get(common.globalUrl + '/exp/QuerylfNewsDetail.do?enorcn=1&lfnid='+lfnid)
      .then(function(response){
        // console.log(response.data);
        var data = response.data;
        that.nTitle = data.nTitle;
        that.nContent = that.textareaTo(data.nContent);
        that.nPicture = data.nPicture;
        that.nDocName = data.nDocName;
        that.nOSSDocName = common.globalMshare + data.nOSSDocName;
        that.baiduDocID = data.baiduDocID;
        that.extDocType = data.extDocType;
        that.dts = new Date(data.ts).Format('yyyy-MM-dd hh:mm');
        that.baiduDocID && that.initBaiduDoc(data.baiduDocID);
      })
      .catch(function(error){
        console.log(error)
        // alert('网络连接错误或服务器异常!!！')
      })
    },
    initBaiduDoc: function(bdid){
      // console.log(bdid);
      var docId = bdid.substring(0,bdid.indexOf('_'));
      // console.log(docId);
      var option = {
          docId: docId,
          token: 'TOKEN',
          host: 'BCEDOC',
          width: 1000, //文档容器宽度
          zoom: false,              //是否显示放大缩小按钮
          zoomStepWidth:200,
          pn: 1,  //定位到第几页，可选
          ready: function (handler) {  // 设置字体大小和颜色, 背景颜色（可设置白天黑夜模式）
              handler.setFontSize(1);
              handler.setBackgroundColor('#000');
              handler.setFontColor('#fff');
          },
          flip: function (data) {    // 翻页时回调函数, 可供客户进行统计等
              // console.log(data.pn);
          },
          fontSize:'big',
          toolbarConf: {
            page: true, //上下翻页箭头图标
            pagenum: true, //几分之几页
            full: false, //是否显示全屏图标,点击后全屏
            copy: true, //是否可以复制文档内容
            position: 'center',// 设置 toolbar中翻页和放大图标的位置(值有left/center)
          } //文档顶部工具条配置对象,必选
      };
      new Document('reader', option);
    }
  },
  mounted:function(){
    this.init();
    var lfnid = this.$route.query.lfnid;
    if(!lfnid) return;
    this.getInforDetail(lfnid);
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
  width: 100px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -50px;
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
  color: #fff;
  font-size: 16px;
}
/*律石研究院文章详情*/
.contentBox{
  width: 1000px;
  height: auto;
  margin: 0 auto 20px;
  position: relative;
}
.infoTitle{
  width: 1000px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 16px;
  margin: 0 auto 10px;
}
.infoTitle .editBtn{
  cursor: pointer;
}
.information{
  color: #c49a6d;
  font-size: 16px;
}
.title{
  width: 850px;
  height: 40px;
  color: #c49a6d;
  font-size: 22px;
  text-align: center;
  margin: 30px auto 0;
}
.date{
  width: 850px;
  height: 30px;
  line-height: 30px;
  padding-right: 30px;
  text-align: right;
  box-sizing: border-box;
  color: #979797;
  font-size: 16px;
  margin: 0 auto 20px;
}
.content{
  width: 850px;
  line-height: 28px;
  color: #333;
  font-size: 15px;
  margin: 0 auto 20px;
}
.content pre{
  margin: 0;
  white-space: pre-wrap;
  color: #4d4d4d;
  font-size: 14px;
}
@media screen and(max-width:414px){
  .position{
    width:100%;
    height:40px;
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
  width: 100px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -50px;
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
  color: #fff;
  font-size: 16px;
}
/*律石研究院文章详情*/
.contentBox{
  width: 1000px;
  height: auto;
  margin: 0 auto 20px;
  position: relative;
}
.infoTitle{
  width: 1000px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 16px;
  margin: 0 auto 10px;
}
.information{
  color: #c49a6d;
  font-size: 16px;
}
.title{
  width: 850px;
  height: 40px;
  color: #c49a6d;
  font-size: 22px;
  text-align: center;
  margin: 30px auto 0;
}
.date{
  width: 850px;
  height: 30px;
  line-height: 30px;
  padding-right: 30px;
  text-align: right;
  box-sizing: border-box;
  color: #979797;
  font-size: 16px;
  margin: 0 auto 20px;
}
.content{
  width: 850px;
  line-height: 28px;
  color: #333;
  font-size: 15px;
  margin: 0 auto 20px;
}
.content pre{
  margin: 0;
  white-space: pre-wrap;
  color: #4d4d4d;
  font-size: 14px;
}
}


</style>
