<template>
    <div class="white-box analytics-info">
    <h3 class="box-title">
        {{ cryptInfo.name }}
    </h3>
    <img :src="getUrl(cryptInfo.src)" alt="" >
    <slot></slot>
    </div>
</template>

<script>
export default {
    name: "SmallCard",
    props:[
        'cryptInfo'
    ],
    data(){
        return{
          showClose: false
        }
    },
    methods:{
    deleteItem(){
       this.$emit("deleteItem")
    },

    getUrl(src) {
      return require("@/assets/cryptos/" + src)
    },
    
    }
}
</script>

<style lang="scss" >
    .white-box {
  padding: 15px 10px;
  position: relative;

  

  &:hover {
    cursor: pointer;
  }
  h3 {
    font-size: 22px;
    margin-right: 15px;
  }

  img {
    width: 30px;
    height: 30px;
  }
}
</style>