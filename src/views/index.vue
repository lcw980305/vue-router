<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part?name=小传">我喜欢</router-link>
      <router-link to="/part/小智">更多</router-link>
    </div>
    <div class="top">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.footer_wrap {
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
