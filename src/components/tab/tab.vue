<template>
  <div class="footer">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/promises">信用</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/friends">好友</router-link>
      </div>
      <div class="tab-item">
        +
      </div>
      <div class="tab-item">
        <router-link to="/loan">贷款</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/moneybag">钱包</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10001;
    width: 100%;
  }

  #app .tab {
    display: flex;
    width: 100%;
    height: 36px;
    color: #000;
    background: #D7D7D9;
  }

  #app .tab .tab-item {
    flex: 1;
    line-height: 36px;
    text-align: center;
  }
  .tab .tab-item a.active {
    color: #0001F5;
  }
</style>
<script type="text/ecmascript-6">
</script>
