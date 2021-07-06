<template>
  <!-- HTML UI:只有一个根节点-->
  <div id="app">
    <!--布局与组件-->
    <router-view>
      <!--这是路由容器，根据用户请求的不同，随时切换渲染结果-->
    </router-view>
  </div>
</template>

<script>
  // ES5.0 6.0语法，创建默认Vue对象
  export default{
    name: "App",
    components:{

    },
    // 定义数据
    // 定义事件
    // 数据操作
    // Ajax请求
    // Vue声明周期函数的重载干预
  }
</script>

<style>
  /**局部样式样式表 */
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";
</style>
