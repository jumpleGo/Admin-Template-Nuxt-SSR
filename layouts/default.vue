<template>
  <div class="basic-template">
    <sidebar class="col-2 basic-template__sidebar" />
    <nuxt class="col-10 basic-template__pages" />
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar
  },

  
}
</script>
<style lang="scss">
.basic-template{
  display: flex;
  position: relative;

  &__sidebar{
    padding: 40px 15px;
    background:  #f5f5f5;
    box-shadow:    inset  -3px -2px 6px 0px rgba(255, 255, 255, 0.877), inset 3px 2px 3px 2px rgba(0, 0, 0, 0.13);
  }
  &__pages{
    padding: 20px 15px;
    background:  #f5f5f5;
  }

  
}

.white-box{
   box-shadow: 3px 2px 6px 0px rgba(0, 0, 0, 0.13), -3px -2px 6px 0px rgb(255, 255, 255);
    background:  #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    border-radius: 4px;
}
</style>
