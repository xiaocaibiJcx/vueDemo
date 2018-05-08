<template>
  <div>
    <div class="header">
      <div class="avarter">
        <img class="img" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
      </div>
      <div class="desc">
        <p class="name">张三</p>
        <p class="text">星星</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .header {
    display: flex;
    padding: 8px 0px;
    width: 100%;
    background: #095FFF;
  }
  .header .avarter {
    flex: 0 0 44px;
    padding-left: 14px;
    margin-right: 10px;
    height: 44px;
  }
  .header .avarter .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .header .desc {
    flex: 1;
  }
  .header .desc .name {
    margin-bottom: 10px;
  }
</style>
<script type="text/ecmascript-6">
  export default {}
</script>
