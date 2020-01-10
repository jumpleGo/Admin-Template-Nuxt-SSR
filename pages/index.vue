<template>
<div>
    <div id="second-step" class="row index">
        <div v-for="crypt in crypts" :key="crypt.name" class="col-lg-2 col-sm-4 col-xs-6  col-lg-offset-2 box">
            <div class="white-box analytics-info" >
                 <h3 class="box-title">{{crypt.name}}</h3>
                <img :src="getUrl(crypt.src)" alt="">
            </div>
        </div>

    </div>

    <add-new-crypt @click.native="show = true"  class="add-new-crypt-button" :src="'buttons/plus.png'" />
    <details-pop-up @closeModal="closeModal" @addData="addData" v-if="show === true" class="details-pop-up" />
</div>
</template>

<script>
import AddNewCrypt from '@/components/AddNewCrypt.vue'
import DetailsPopUp from '@/components/DetailsPopUp.vue'
export default {
    components: {
    AddNewCrypt,
    DetailsPopUp
  },
  data(){
    return{
      show: false,
      crypts:[
          {
              name: 'Bitcoin',
              src: 'BTC.png'
          },
          {
              name: 'Ethereum',
              src: 'ETH.png'
          },
          {
              name: 'Ripple',
              src: 'XRP.png'
          }]
      }
    },
  
  methods:{
      closeModal(data){
          this.show = data;
      },
      getUrl(src){
          return require('@/assets/cryptos/'+ src)
      },
      addData(data){
          this.crypts.push(data);
          console.log(data)
      }
  }

}
</script>

<style lang="scss" scoped>
.box{
    margin-top: 20px;
}
    .white-box{
       padding: 15px 10px;

        &:hover{
         cursor: pointer;
        }
        h3{
            font-size: 22px;
            margin-right: 15px;
        }

        img{
            width: 30px;
            height: 30px;
        }
        
    }

    .index{
        position: relative;
    }
    .add-new-crypt-button{
    position: absolute;
    bottom: 30px;
    right: 30px;
    @include custom-button();
    padding: 20px;
    border-radius: 50%;
    z-index: 1;
  }

    .details-pop-up{
    position: fixed;
    top: 0;
    right: 0;
    background:  #f5f5f5;
    box-shadow:  -3px -2px 6px 0px rgba(0, 0, 0, 0.13), 3px 2px 6px 0px rgb(255, 255, 255);
    z-index: 2;
  }

</style>
