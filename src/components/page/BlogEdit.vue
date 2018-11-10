<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent;position:relative;"></div>
    <!-- 团队／顾问 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">团队/顾问</div>
        <div class="aboutEng">OUR TEAM</div>
      </div>
    </div>
    <!-- 上传图片，编辑内容，发布 -->
    <div class="contentBox">
      <div class="imgBox">
        <div class="imgTitle">封面图片上传</div>
        <div class="imgUpload">
          <div class="imgLeft">
            <img v-if="nImgUrl" v-bind:src="nImgUrl">
            <img v-else src="../../assets/images/team.png">
          </div>
          <div class="imgRight">
            <div class="chooseImg">选择图片<input type="file" id="choose_img" accept="image/jpeg,image/jpg,image/png,image/gif" @change="resetImg($event)"></div>
            <div class="uploadImg" @click="uploadImg">上传</div>
          </div>
          
        </div>
      </div>
      <div class="imgTitle">编辑内容</div>
      <div class="contentTitle">
        <input type="text" name="nTitle" v-model="nTitle" placeholder="请输入标题">
      </div>
      <div class="annexBox">
      <div class="annexTitle">上传附件<input type="file" id="choose_file" accept=".pdf" @change="resetAnnex($event)"> </div>
        <div class="annexFile" v-if="nDocName">
          <span class="annexFileImg"><img src="../../assets/images/annex.png"></span>
          <span class="annexFileName" >{{nDocName}}</span>
          <span class="annexFileDelete" @click="clearAnnex">删除</span>
        </div>
      </div>
      <div class="content">
        <textarea placeholder="请输入内容" v-model="nContent"></textarea>
      </div>
      <div class="submit" @click="gotoUpload">发布</div>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
import {mapState,mapMutations} from 'vuex';
import store from '@/vuex/store';
import axios from 'axios';

export default {
  name: 'BlogEdit',
  store,
  data () {
    return {
      lfnid : 0,
      nTitle : '',
      nContent : '',
      nPicture : '',
      nImgUrl: '',
      nDocName : '',
      baiduDocID : '',
      extDocType : '',
      dts: ''
    }
  },
  computed: {
    ...mapState(['username']),
  },
  methods: {
    init: function(){
      // console.log(common.globalUrl);
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
      axios.get(common.globalUrl + '/exp/QuerylfNewsDetail.do?lfnid='+lfnid)
      .then(function(response){
        // console.log(response.data);
        var data = response.data;
        that.nTitle = data.nTitle;
        that.nContent = that.textareaToStr(data.nContent);
        that.nPicture = data.nPicture;
        that.nImgUrl = common.globalMshare + data.nPicture;
        that.nDocName = data.nDocName;
        that.baiduDocID = data.baiduDocID;
        that.extDocType = data.extDocType;
        that.dts = new Date(data.ts).Format('yyyy-MM-dd hh:mm');
      })
      .catch(function(error){
        alert('网络连接错误或服务器异常!!！')
      })
    },
    // 获取上传文件名和大小
    resetAnnex: function(e){
      // console.log(e);
      var that = this;
      var f = document.getElementById('choose_file').files[0],
          r = new FileReader();
      if (!f){
        alert('请先选择文件！');
        return;
      } 
      r.onloadend = function(e) {
          var data = e.target.result;
          var fd = new FormData();
          fd.append('fileToUpload', f);
          fd.append('filename', f.name);
          // console.log(fd);
          // console.log(fd.fileToUpload);
          axios.post(common.globalUrl + '/data/UploadBaiDuDoc.do',fd)
          .then(function(response){
            // console.log(response.data);
            if(response.data.c === 1000){
              that.baiduDocID = response.data.bdid;
              that.extDocType = response.data.bdt;
            }
          })
          .catch(function(error){
            alert('网络连接错误或服务器异常！')
          })
      };
      r.readAsDataURL(f);
      this.nDocName = e.target.files[0].name;
    },
    // 清空上传文件
    clearAnnex: function(){
      this.nDocName = '';
      this.baiduDocID = '';
      this.extDocType = '';
    },
    // 获取上传图片路径
    resetImg: function(e){
      // console.log(e.target.files);
      // console.log(e.target.value);
      this.nImgUrl = this.getObjectURL(e.target.files[0]);
    },
    // 获取文件绝对路径
    getObjectURL:function (file) {  
       var url = null;  
       if (window.createObjcectURL != undefined) {  
           url = window.createOjcectURL(file);  
       } else if (window.URL != undefined) {  
           url = window.URL.createObjectURL(file);  
       } else if (window.webkitURL != undefined) {  
           url = window.webkitURL.createObjectURL(file);  
       }  
       return url;  
    },
    // 上传图片
    uploadImg: function(){
      var that = this;
      // console.log(str);
      var f = document.getElementById('choose_img').files[0],
          r = new FileReader();
      // console.log('f,r:'+f,r);
      // console.log(f);
      if(!f){
        alert('请先选择图片！');
        return;
      }
      r.onloadend = function(e) {
        var data = e.target.result;
        var fd = new FormData();
        fd.append('fileToUpload', f);
        fd.append('filename', f.name);
        // console.log(fd);
        axios.post(common.globalUrl + '/data/upload',fd)
        .then(function(response){
          // console.log(response.data);
          if(response.data.c === 1000){
            that.nImgUrl = common.globalMshare + response.data.on;
            that.nPicture = response.data.on;
            alert('上传成功！')
          }
        })
        .catch(function(error){
          alert('网络连接错误或服务器异常！')
        })
      };
      r.readAsDataURL(f);
    },
    // textarea转换保留空格和换行
    textareaTo: function(str){
      var reg=new RegExp("\n","g");
      var regSpace=new RegExp(" ","g");
      str = str.replace(reg,"<br>");
      str = str.replace(regSpace,"&nbsp;");
      return str;
    },
    // textarea保留空格和换行
    textareaToStr: function(str){
      var reg=new RegExp("<br>","g");
      var regSpace=new RegExp("&nbsp;","g");
      str = str.replace(reg,"\n");
      str = str.replace(regSpace," ");
      return str;
    },
    // 提交上传标题，附件，内容
    gotoUpload: function(){
      var that = this;
      if(!this.nPicture){
        alert('请上传图片！');
        return;
      }else if(!this.nTitle){
        alert('请输入文章标题！');
        return;
      }else if(!this.nContent){
        alert('请输入内容！');
        return;
      }
      // console.log(this.nPicture);
      // console.log(this.nTitle);
      // console.log(this.nDocName);
      // console.log(this.baiduDocID);
      // console.log(this.extDocType);
      // console.log(this.nContent);
      // console.log(this.textareaTo(this.nContent));
      // lfnid : 诉讼基金新闻ID      int
      // nTitle :  标题     String
      // nContent :  内容        String
      // nPicture :  图片    String
      // nDocName :  附件名    String
      // baiduDocID :  百度附件ID    String
      // extDocType :  附件扩展名    String
      axios.post(common.globalUrl + '/exp/UpdatelfNews.do',{
        lfnid : that.lfnid,
        nTitle : that.nTitle,
        nContent : that.textareaTo(that.nContent),
        nPicture : that.nPicture,
        nDocName : that.nDocName,
        baiduDocID : that.baiduDocID,
        extDocType : that.extDocType,
      })
      .then(function(response){
        // console.log(response.data);
        if(response.data.c === 1000){
          alert('发布成功！');
          that.$router.push({//你需要接受路由的参数再跳转
            path: '/Blog'
          });
        }
      })
      .catch(function(error){
        alert('网络连接错误或服务器异常！')
      })
    }
  },
  mounted:function(){
    this.init();
    var lfnid = this.$route.query.lfnid;
    this.lfnid = lfnid;
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
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 120px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
}
/*上传图片，编辑内容，发布*/
.contentBox{
  width: 856px;
  height: auto;
  margin: 0 auto 20px;
}
.imgBox{
  width: 856px;
  height: 305px;
}
.imgTitle{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-family: 'Medium';
  color: #4d4d4d;
  font-size: 18px;
  margin:25px 0 15px;
}
.imgUpload{
  width: 100%;
  display: flex;
  height: 250px;
}
.imgLeft{
  width: 342px;
  height: 255px;
  margin-right: 30px;
  overflow: hidden;
}
.imgLeft img{
  width: 100%;
  display: block;
}
.imgRight{
  flex: 1;
  padding-top: 180px;
  box-sizing: border-box;
}
.chooseImg{
  width: 97px;
  height: 30px;
  border: 1px solid #4d4d4d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 15px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
}
.chooseImg input{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
}
.uploadImg{
  width: 97px;
  height: 30px;
  border: 1px solid #c49a6d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;
}
.contentTitle{
  width: 856px;
  height: 30px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.contentTitle input{
  width: 100%;
  border: none;
  outline: none;
  text-indent: 15px;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
}
.annexBox{
  width: 100%;
  padding: 0 0 10px;
}
.annexTitle{
  background: url('../../assets/images/annex.png') left center no-repeat;
  height: 30px;
  line-height: 30px;
  text-decoration: underline;
  padding-left: 20px;
  box-sizing: border-box;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  position: relative;
  z-index: 0;
}
.annexTitle input{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
.annexFile{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  background: #e4e4e4;
  display: flex;
}
.annexFileImg{
  width: 40px;
  height: 30px;
  display: block;
  padding: 5px 10px;
  box-sizing: border-box;
}
.annexFileName{
  width: auto;
  height: 30px;
  line-height: 30px;
  display: block;
  margin-right: 45px;
  font-family: 'Normal';
  color: #333;
  font-size: 13px;
}
.annexFileDelete{
  height: 30px;
  line-height: 30px;
  display: block;
  font-family: 'Normal';
  color: #333;
  font-size: 13px;
  cursor: pointer;
}
.content{
  width: 856px;
  height: 533px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.content textarea{
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  text-indent: 28px;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 14px;
  line-height: 26px;
  box-sizing: border-box;
}
.submit{
  width: 106px;
  height: 30px;
  border: 1px solid #c49a6d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 50px;
}


</style>
