<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@font-face {
  font-family: IranSans;
  src: url("./fonts/IRANSansWeb(FaNum)_Medium.eot");
  src: url("./fonts/IRANSansWeb(FaNum)_Medium.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/IRANSansWeb(FaNum)_Medium.woff") format("woff"),
    url("./fonts/IRANSansWeb(FaNum)_Medium.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: IranSans;
  src: url("./fonts/IRANSansWeb(FaNum)_Bold.eot");
  src: url("./fonts/IRANSansWeb(FaNum)_Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/IRANSansWeb(FaNum)_Bold.woff") format("woff"),
    url("./fonts/IRANSansWeb(FaNum)_Bold.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: IranSans;
  src: url("./fonts/IRANSansWeb(FaNum).eot");
  src: url("./fonts/IRANSansWeb(FaNum).eot?#iefix") format("embedded-opentype"),
    url("./fonts/IRANSansWeb(FaNum).woff") format("woff"),
    url("./fonts/IRANSansWeb(FaNum).ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body,
html {
  font-family: "IranSans", sans-serif;
  font-size: 12px;
  line-height: 16px;
  direction: rtl;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
#app {
  padding-right: 16px;
  padding-left: 16px;
  min-width: 992px;
  max-width: 1000px;
  margin: 100px auto;
  text-align: right;
}
</style>
