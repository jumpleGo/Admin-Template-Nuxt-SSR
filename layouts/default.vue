<template>
  <div class="basic-template">
    <sidebar class="col-3" />
    <nuxt class="col-9" />
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.basic-template{
  display: flex;
}
</style>
