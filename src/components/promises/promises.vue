<template>
  <div>
    <v-header></v-header>
    <div class="nav-tab">
      <router-link to="/promises/infoman" tag="div" class="itme-tab">
        <span>我是借款人</span>
      </router-link>
      <router-link to="/promises/outman" tag="div" class="itme-tab">
        <span @click="infoClick">我是出借人</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  .nav-tab {
    display: flex;
    height: 45px;
    border-bottom: 1px solid #D9D9D9;
  }

  .nav-tab .itme-tab {
    flex: 1;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    color: #000;
  }

  .nav-tab .itme-tab span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .nav-tab .itme-tab.active {
    border-bottom: 1px solid #524C96;
  }
</style>
<script type="text/ecmascript-6">
  import Header from '../header/header.vue'

  export default {
    components: {
      'v-header': Header
    },
    methods: {
      infoClick() {
        console.log(1)
      }
    }
  }
</script>
