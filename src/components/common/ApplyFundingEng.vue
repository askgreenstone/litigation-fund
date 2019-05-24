<template>
	<!-- 申请资助 -->
  <div class="applyFunding">
    <img src="../../assets/images/applyFunding.png">
    <div class="applyTitle">Let Us Resolve Your Litigation Risks</div>
    <router-link tag="div" to="/Contact-en" class="applyButton">Apply for Litigation Funding</router-link>
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
  right: 15%;
  width: 270px;
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
    width: 100%;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 14px;
    top: 40px;
  }
  .applyButton{
    position: absolute;
    left: 50%;
    margin-left: -110px;
    width: 220px;
    height: 30px;
    line-height: 30px;
    border-radius: 12px;
    color: #fff;
    font-size: 14px;
    top: 70px;
    background: #c49a6d;
    text-align: center;
    cursor: pointer;
  }
}
</style>
