<template>
    <div class="add-new-crypt">
        <img class="add-new-crypt__img" :src="ImgUrl(src)" alt="">
    </div>
</template>

<script>
export default {
    props:{
        src: String
    },
  methods:{
      ImgUrl(src){
        return require('@/assets/' + this.src);
      }
  }
}
</script>

<style lang="scss" scpoed>
    .add-new-crypt{
        display: flex;
        justify-content: center;
        align-items: center;
        &__img{
        width: 40px;
        height: 40px;
    }
    }

    
</style>