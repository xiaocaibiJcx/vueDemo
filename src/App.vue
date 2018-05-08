<template>
  <div id="app">
    <div class="box1"></div>
    <div class="box2">
     <div>
       <el-table
         :data="tableData"
         border
         style="width: 100%">
         <el-table-column
           prop="date"
           label="日期"
           width="150">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="120">
         </el-table-column>
         <el-table-column
           prop="province"
           label="省份"
           width="120">
         </el-table-column>
         <el-table-column
           prop="city"
           label="市区"
           width="120">
         </el-table-column>
         <el-table-column
           prop="address"
           label="地址"
           width="300">
         </el-table-column>
         <el-table-column
           prop="zip"
           label="邮编"
           width="120">
         </el-table-column>
         <el-table-column
           prop="zip"
           label="邮编"
           width="120">
         </el-table-column>
         <el-table-column
           prop="zip"
           label="邮编"
           width="120">
         </el-table-column>
         <el-table-column
           label="操作"
           width="100">
           <template slot-scope="scope">
             <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
             <el-button type="text" size="small">编辑</el-button>
           </template>
         </el-table-column>
       </el-table>
     </div>
    </div>
    <!--<router-view></router-view>-->
    <tab v-if="false"></tab>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    components: {
      Tab
    }
  }
</script>

<style>
  #app {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .box1 {
    /*display: inline-block;*/
    /*float: left;*/
    flex: 0 0 220px;
    height: 100%;
    /*width: 20%;*/
    background: silver;
  }

  .box2 {
    display: inline-block;
    flex: 1;
    /*width: 80%;*/
    background: seagreen;
  }
</style>
