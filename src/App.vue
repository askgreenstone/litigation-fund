<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App'
}
// console.log($);
</script>
<style>

html,body,#app{
  margin: 0;
  padding: 0;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
}
@media screen and (min-width: 1200px) and (max-width:1360px){
  html,body,#app{
    min-width: 1200px;
  }
  .topNav li{
    width: 12.5%;
    margin: 0;
  }

}
@media screen and (min-width: 415px) and (max-width:1200px){
  html,body,#app{
    min-width: 1200px;
  }
  .topNav li{
    width: 12.5%;
    margin: 0;
  }

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a {
  color: #42b983;
}
input{
  outline: none;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
}
textarea{
  outline: none;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.top{
  width: 100%;
}
a{
  text-decoration: none;
}
img{
  display: block;
  margin: 0 auto;
}

</style>
