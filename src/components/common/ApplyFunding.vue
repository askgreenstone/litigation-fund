<template>
	<!-- 申请资助 -->
  <div class="applyFunding">
    <img src="../../assets/images/applyFunding.png">
    <div class="applyTitle">让我们化解您的诉讼风险</div>
    <router-link tag="div" to="/Contact" class="applyButton">申请资助</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*申请资助*/
.applyFunding{
  width: 100%;
  position: relative;
}
.applyFunding img{
  width: 100%;
}
.applyTitle{
  position: absolute;
  left: 24%;
  color: #fff;
  font-size: 26px;
  top: 48%;
}
.applyButton{
  position: absolute;
  right: 23%;
  width: 123px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  top: 48%;
  background: #c49a6d;
  text-align: center;
  cursor: pointer;
}
@media screen and (max-width:414px){
  .applyFunding{
    width: 100%;
    height: 140px;
    position: relative;
    background: url("../../assets/images/applyFunding.png");
    background-position: center;
    background-size: auto 100%;
  }
  .applyFunding img{
    width: 100%;
    display: none;
  }
  .applyTitle{
    position: absolute;
    left: 36px;
    color: #fff;
    font-size: 14px;
    top: 63px;
  }
  .applyButton{
    position: absolute;
    right: 40px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    top: 50px;
    background: #c49a6d;
    text-align: center;
    cursor: pointer;
  }
}
</style>
