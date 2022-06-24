<template>
  <div>
    <p>朋友</p>
    <p>你好</p>
    <p>人名：{{ $route.query.name }} -- {{ $route.params.username }}</p>
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
<style lang="less" scoped></style>
