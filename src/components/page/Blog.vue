<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div class="position"></div>
   <!-- 律石研究院 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner4.png">
      <div class="aboutImgBox">
        <div class="aboutChi">律石研究院</div>
        <div class="aboutEng">LS INSTITUTE</div>
      </div>
    </div>
    <!-- 搜索框，新建按钮，团队介绍 -->
    <div class="searchBox">
      <div class="search">
        <input type="text" name="search" class="searchInput" v-model="keyword" placeholder="请输入关键词" @input="searchClear">
        <span class="searchBtn" @click="searchNews">搜索</span>
        <router-link tag="span" to="/Blog/BlogEdit" v-if="username" class="searchBtn">新建</router-link>
      </div>
    </div>
    <!-- 律石研究院列表 -->
    <ul class="searchList">
      <router-link v-for="item in newsList" class="searchLi" tag="li" :to="{path:'/Blog/BlogDetail',query:{lfnid:item.lfnid}}" :key="item.lfnid" >
        <div class="searchLeft">
          <img :src="item.nPicture">
        </div>
        <div class="searchRight">
          <div class="searchRightTop">
            <div class="title">{{item.nTitle}}</div>
            <div class="date">{{item.ts}}</div>
          </div>
          <div class="searchIntroduction">
            <pre>
              {{item.nContent.length>120?item.nContent.substr(0,120)+'...':item.nContent}} 
            </pre>
          </div>
          <div v-if="username" class="searchEdit">
            <span class="deleteBtn" @click.stop="deleteCommand(item.lfnid)">删除</span>
            <router-link tag="span" class="editBtn" :to="{path:'/Blog/BlogEdit',query:{lfnid:item.lfnid}}">编辑</router-link>
          </div>
        </div>
      </router-link>
    </ul>
    <ol class="pageList">
      <li @click="gotoPre()"><a href="javascript:;">&lt;</a></li>
      <li v-for="page in showPageBtn" :class="{'pageActive':page==pageIndex+1}">
        <a href="javascript:;" v-if="page" @click="gotoPage(page)">{{page}}</a>
        <a href="javascript:;" v-else>···</a>
      </li>
      <li @click="gotoNext()"><a href="javascript:;">&gt;</a></li>
    </ol>
    <div class="blogArticle">
      <div class="title">律石诉讼资助</div>
      <div class="content">诉讼资助的主要优势是不论当事方的财务状况如何，均可以通过外部资助启动司法救济程序，并且由资助方分担诉讼风险，使当事方能够将有限的流动资金集中在研发、生产等主营业务领域、创造更大产值，避免冗长的诉讼周期带来的资金、时间、精力上的损耗，并解决了当事人遴选律师团队的痛点、消除了代理人与被代理人之间的信任风险。</div>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack';
import Bottom from '@/components/common/Bottom';
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: 'Blog',
  store,
  data () {
    return {
      pageIndex: 0,
      pages: 0,
      keyword: '',
      pageList: [],
      newsList: []
    }
  },
  computed:{
    ...mapState(['username']),
    // 显示分页按钮
    showPageBtn:function() {
      let pageNum = this.pages; // 总页数
      let index = this.pageIndex+1; // 当前页
      let arr = [];
      if (pageNum <= 6) {
         for (let i = 1; i <= pageNum; i++) {
             arr.push(i)
        }
         return arr
      }
      // 对页码显示进行处理，动态展示
      if (index <= 3){
        return [1, 2, 3, 4, 0, pageNum];
      } 
      if (index >= pageNum - 1){
        return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      } 
      if (index === 4){
        return [1, 2, 3, 4, 5, 0, pageNum];
      } 
      if (index === pageNum - 2){
        return [1, 0, pageNum - 4, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      } 
      return [1, 0, index - 2,index - 1, index, index + 1, index + 2, 0, pageNum];
    }
  },
  methods: {
    init: function(){
      // console.log(this.username);
      // this.username = 'qiaof';
    },
    // 关键字搜索
    searchNews: function(){
      var that = this;
      // 判断关键词输入
      if(!(that.keyword.trim())){
        alert('请输入关键词！');
        that.keyword = '';
        return;
      }
      // console.log(page);
      //时间格式化
      Date.prototype.Format = function(fmt)   
      { //author: meizz   
        var o = {   
          "M+" : this.getMonth()+1,                 //月份   
          "d+" : this.getDate(),                    //日   
          "h+" : this.getHours(),                   //小时   
          "m+" : this.getMinutes(),                 //分   
          "s+" : this.getSeconds(),                 //秒   
          "q+" : Math.floor((this.getMonth()+3)/3), //季度   
          "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
          if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
      }
      // lfnid : 诉讼基金新闻ID      int
      // nTitle :  标题     String
      // nContent :  内容        String
      // nPicture :  图片    String
      // nDocName :  附件名    String
      // baiduDocID :  百度附件ID    String
      // extDocType :  附件扩展名    String
      // console.log(that);
       //  enorcn  1中文  2英文
      axios.get(common.globalUrl+'/exp/QuerylfNews.do?enorcn=1&page=0&count=5&keyWord='+that.keyword)
      .then(function (response) {
        // console.log(response.data);
        that.newsList = response.data.lfnl;
        that.pages = Math.ceil(response.data.num/5);
        // console.log('pages:'+that.pages);
        // 修改时间戳为时间格式
        for (var i = 0; i < that.newsList.length; i++) {
          that.newsList[i].ts = new Date(that.newsList[i].ts).Format('yyyy-MM-dd hh:mm');
          that.newsList[i].nPicture = common.globalMshare + that.newsList[i].nPicture;
          that.newsList[i].nContent = that.textareaTo(that.newsList[i].nContent);
        }
      })
      .catch(function (error) {
        alert('网络连接错误或服务器异常！');
      });
    },
    // 
    searchClear: function(){
      var keyword = this.keyword.trim();
      var that = this;
      if(keyword == ''){
        that.getNewsList(0)
      }
      // console.log(this.keyword);
    },
    // textarea转换保留空格和换行
    textareaTo: function(str){
      var reg=new RegExp("<br>","g");
      var regSpace=new RegExp("&nbsp;","g");
      str = str.replace(reg,"\n");
      str = str.replace(regSpace," ");
      return str;
    },
    // 获取需求列表
    getNewsList: function(page){
      var that = this;
      // console.log(page);
      //时间格式化
      Date.prototype.Format = function(fmt)   
      { //author: meizz   
        var o = {   
          "M+" : this.getMonth()+1,                 //月份   
          "d+" : this.getDate(),                    //日   
          "h+" : this.getHours(),                   //小时   
          "m+" : this.getMinutes(),                 //分   
          "s+" : this.getSeconds(),                 //秒   
          "q+" : Math.floor((this.getMonth()+3)/3), //季度   
          "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
          if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
      }
      // lfnid : 诉讼基金新闻ID      int
      // nTitle :  标题     String
      // nContent :  内容        String
      // nPicture :  图片    String
      // nDocName :  附件名    String
      // baiduDocID :  百度附件ID    String
      // extDocType :  附件扩展名    String
      // console.log(that);
      axios.get(common.globalUrl+'/exp/QuerylfNews.do?enorcn=1&page='+page+'&count=5')
      .then(function (response) {
        // console.log(response.data);
        that.newsList = response.data.lfnl;
        that.pages = Math.ceil(response.data.num/5);
        // console.log('pages:'+that.pages);
        // 修改时间戳为时间格式
        for (var i = 0; i < that.newsList.length; i++) {
          that.newsList[i].ts = new Date(that.newsList[i].ts).Format('yyyy-MM-dd hh:mm');
          that.newsList[i].nPicture = common.globalMshare + that.newsList[i].nPicture;
          that.newsList[i].nContent = that.textareaTo(that.newsList[i].nContent);
        }
      })
      .catch(function (error) {
        alert('网络连接错误或服务器异常！');
      });
    },
    // 删除某条需求
    deleteCommand: function(lfnid){
      // console.log(lfnid);
      var that = this;
      var confirm = window.confirm('确定要删除么？');
      if(confirm){
        axios.post(common.globalUrl+'/exp/DellfNews.do',{
          "lfnid": lfnid
        })
        .then(function(response){
          // console.log(response);
          that.getNewsList(that.pageIndex);
        })
        .catch(function(){
          alert('网络连接错误或服务器异常！');
        })
      }
    },
    // 编辑某条需求
    editCommand: function(lfnid){
      // console.log(lfnid);
      var that = this;
      var confirm = window.confirm('确定要删除么？');
      if(confirm){
        axios.post(common.globalUrl+'/exp/DellfDemand.do',{
          "lfnid": lfnid
        })
        .then(function(response){
          // console.log(response);
          that.getInforList(that.pageIndex);
        })
        .catch(function(){
          alert('网络连接错误或服务器异常！');
        })
      }
    },
    // 跳转到某一页
    gotoPage: function(page){
      // console.log(page);
      this.pageIndex = page-1;
      this.getNewsList(page-1)
    },
    // 跳转到上一页
    gotoPre: function(){
      this.pageIndex -= 1;
      if(this.pageIndex < 0){
        this.pageIndex = 0;
      } 
      this.getInforList(this.pageIndex)
    },
    // 跳转到下一页
    gotoNext: function(){
      // console.log(this.pageIndex);
      // console.log(this.pages);
      this.pageIndex += 1;
      if(this.pageIndex > this.pages-1){
        this.pageIndex = this.pages-1;
      } 
      this.getInforList(this.pageIndex)
    }
  },
  mounted:function(){
    this.init();
    this.getNewsList(0);
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
  font-weight: bold;
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
/*搜索框，新建按钮，团队介绍*/
.searchBox{
  width: 850px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
}
.search{
  width: 100%;
  height: 35px;
}
.searchInput{
  width: 470px;
  height: 35px;
  line-height: 33px;
  padding-left: 10px;
  outline: none;
  box-sizing: border-box;
  color: #b1b1b1;
  font-size: 14px;
  border: 1px solid #ccc;
}
.searchBtn{
  width: 83px;
  height: 33px;
  text-align: center;
  display: inline-block;
  border: 1px solid #c49a6d;
  line-height: 33px;
  color: #c49a6d;
  font-size: 14px;
  margin-left: 75px;
  cursor: pointer;
}
/*文章列表*/
.searchList{
  width: 850px;
  margin: 0 auto;
  position: relative;
}
.searchLi{
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.searchLeft{
  width: 198px;
  height: 130px;
  margin-right: 20px;
  overflow: hidden;
}
.searchLeft img{
  width: 100%;
  display: block;
}
.searchRight{
  width: 630px;
  height: 130px;
}
.searchRightTop{
  width: 100%;
  padding-top: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.title{
  width: 50%;
  display: inline-block;
  color: #c49a6d;
  font-size: 18px;
  text-decoration: underline;
}
.date{
  width: 49%;
  display: inline-block;
  text-align: right;
  color: #333;
  font-size: 15px;
}
.searchIntroduction{
  width: 100%;
  color: #333;
  font-size: 15px;
  line-height: 27px;
  height: 60px;
}
.searchIntroduction pre{
  margin: 0;
  white-space: pre-line;
}
.searchEdit{
  width: 100%;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
}
.editBtn{
  float: right;
  width: 60px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  color: #333;
  font-size: 15px;
  cursor: pointer;
}
.deleteBtn{
  float: right;
  width: 60px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  color: red;
  font-size: 15px;
  cursor: pointer;
}
.pageList{
  width: 500px;
  height: 40px;
  margin: 20px auto;
  display: flex;
}
.pageList li{
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin: 7px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
}
.pageList li a{
  width: 25px;
  height: 25px;
  line-height: 25px;
  display: block;
  color: #4d4d4d;
  font-size: 14px;
}
.pageList li.pageActive{
  border-radius: 12px;
  background: #c49a6d;
}
.pageList li.pageActive a{
  color: #fff;
  font-size: 14px;
}
.blogArticle{
  display: none;
}
@media screen and (max-width:414px){
  .position{
    width:100%;
    height:40px;
    background:#fff;
    position:relative;
  }
  /*关于我们图片*/
  .aboutImg{
    width: 100%;
    height: 280px;
    position: relative;
    margin-bottom: 0;
    overflow: hidden;
  }
  .aboutImg img{
    width: auto;
    height: 160px;
    left: -60px;
    position: relative;
    top: -1px;
  }
  .aboutImgBox{
    width: 120px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -60px;
    top: 160px;
    padding-top: 50px;
  }
  .aboutChi{
    width: 120px;
    height: 26px;
    text-align: center;
  font-weight: bold;
    color: #c49a6d;
    font-size: 16px;
    border-bottom: 1px solid #c49a6d;
  }
  .aboutEng{
    width: 120px;
    height: 22px;
    line-height: 22px;
    text-align: center;
  font-weight: bold;
    color: #333;
    font-size: 13px;
  }
  /*搜索框，新建按钮，团队介绍*/
  .searchBox{
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    position: relative;
    display: none;
  }
  .search{
    width: 100%;
    height: 35px;
    display: flex;
  }
  .searchInput{
    flex: 1;
    height: 35px;
    margin: 0 auto;
    line-height: 33px;
    padding-left: 10px;
    outline: none;
    box-sizing: border-box;
    color: #b1b1b1;
    font-size: 14px;
    border: 1px solid #ccc;
  }
  .searchBtn{
    width: 83px;
    height: 33px;
    text-align: center;
    display: inline-block;
    border: 1px solid #c49a6d;
    line-height: 33px;
    color: #c49a6d;
    font-size: 14px;
    margin-left: 0;
    cursor: pointer;
  }
  /*文章列表*/
  .searchList{
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: none;
  }
  .searchLi{
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
  }
  .searchLeft{
    width: 198px;
    height: 130px;
    margin-right: 20px;
    overflow: hidden;
  }
  .searchLeft img{
    width: 100%;
    display: block;
  }
  .searchRight{
    width: 630px;
    height: 130px;
  }
  .searchRightTop{
    width: 100%;
    padding-top: 5px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .title{
    width: 50%;
    display: inline-block;
    color: #c49a6d;
    font-size: 18px;
    text-decoration: underline;
  }
  .date{
    width: 49%;
    display: inline-block;
    text-align: right;
    color: #333;
    font-size: 15px;
  }
  .searchIntroduction{
    width: 100%;
    color: #333;
    font-size: 15px;
    line-height: 27px;
    height: 60px;
  }
  .searchIntroduction pre{
    margin: 0;
    white-space: pre-line;
  }
  .searchEdit{
    width: 100%;
    height: 20px;
    line-height: 20px;
    box-sizing: border-box;
  }
  .editBtn{
    float: right;
    width: 60px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    color: #333;
    font-size: 15px;
    cursor: pointer;
  }
  .deleteBtn{
    float: right;
    width: 60px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
  }
  .pageList{
    width: 500px;
    height: 40px;
    margin: 20px auto;
    display: flex;
    display: none;
  }
  .pageList li{
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin: 7px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 12px;
  }
  .pageList li a{
    width: 25px;
    height: 25px;
    line-height: 25px;
    display: block;
    color: #4d4d4d;
    font-size: 14px;
  }
  .pageList li.pageActive{
    border-radius: 12px;
    background: #c49a6d;
  }
  .pageList li.pageActive a{
    color: #fff;
    font-size: 14px;
  }
  .blogArticle{
    width: 100%;
    display: block;
    background: #fff;
    padding: 20px 20px 40px;
    padding-top: 0;
    box-sizing: border-box;
  }
  .blogArticle .title{
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #c49a6d;
    font-size: 16px;
    margin: 0 auto 20px;
    text-decoration: none;
    
  }
  .blogArticle .content{
    line-height: 20px;
    color: #333;
    font-size: 13px;
    text-indent: 26px;
  }
}
</style>

