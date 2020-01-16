<template>
  <div class="white-box analytics-info">
    <h3 class="box-title">
      {{ cryptInfo.name }}
    </h3>
    <img :src="getUrl(cryptInfo.src)" alt="" >
    <slot />
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props: ["cryptInfo"],
  data() {
    return {
      showClose: false
    }
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem")
    },

    getUrl(src) {
      return require("@/assets/cryptos/" + src)
    }
  }
}
</script>

<style lang="scss" scoped>
.white-box {
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  h3 {
    font-size: 22px;
    margin-right: 15px;
  }

  img {
    width: 30px;
    height: auto;
  }
}
</style>
