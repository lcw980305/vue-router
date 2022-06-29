<template>
  <div>
    <p>我的</p>
    <p>音乐</p>
    <p>{{ $store.state.name }}</p>
    <p>{{ $store.state.age }}</p>
    <el-button @click="btn">点击+1 {{ num }}</el-button>
  </div>
</template>

<script>
export default {
  name: "My",
  components: {},
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    btn() {
      this.$store.commit("addage", 1);
      this.num++;
    },
  },
};
</script>
