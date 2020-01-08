<template>
  <div class="sidebar">
    <div class="sidebar__nav">
      <div class="sidebar-head" />
      <div class="sidebar__nav-links">
    
          <nuxt-link to="/" class="sidebar__nav--link">
            Invest
          </nuxt-link>
    
          <nuxt-link to="/BuyAnAsset" class="sidebar__nav--link">
            Buy an asset
          </nuxt-link>
      
      
          <nuxt-link to="/YourAsset" class="sidebar__nav--link">
            Your assets
          </nuxt-link>
       
       
          <nuxt-link to="/Contact" class="sidebar__nav--link">
            Contact
          </nuxt-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style lang="scss" scoped>
.sidebar{
    
    min-height: 100vh;

    &__nav{
        display: flex;
        flex-direction: column;

        &-links{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        &--link{
            text-decoration: none;
            color: black;
            font-size: 20px;
            padding: 15px;
            width: 100%;
            font-family: 'Lato', sans-serif;
            
            &:hover{
                cursor: pointer;
                background: rgba(0, 0, 0, 0.027); 
            }
        }
    }

}
</style>
