<template>
  <div class="details-pop-up">
    <div class="details-pop-up__close">
      <img
        class="details-pop-up__close--img"
        src="@/assets/buttons/close.png"
        alt=""
        @click="closePopUp()"
      />
    </div>
    <h3 class="details-pop-up__heading">
      Add your info
    </h3>

    <form class="details-pop-up__form" @submit.prevent="addData()">
      <select
        v-model="data.name"
        required
        class="details-pop-up__form--input"
        @change="addSrc(); getPrice();"
      >
        <option disabled value="">
          Выберите один из вариантов
        </option>
        <option
          v-for="(cryptocurrency, index) in cryptocurrencyes"
          :key="index"
        >
          {{ cryptocurrency.name }}
        </option>
      </select>
      <button class="details-pop-up__form--button">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  name: "DelailsPopUp",
  data() {
    return {
      
      data: {
        name: "",
        src: "",
        key: '',
        price: ''
      },
      cryptocurrencyes: [
        { name: "BTC" },
        { name: "ETH" },
        { name: "XRP" },
        { name: "ETC" },
        { name: "LTC" },
        { name: "BNB" },
        { name: 'DASH'},
        { name: "WAVES"}
      ]
    }
  },

  methods: {
    closePopUp() {
      this.$emit("closeModal", (this.show = false))
    },
    addSrc() {
      switch (this.data.name) {
        case "BTC":
          this.data.src = "BTC.png";
          this.data.key = 1;
          break
        case "ETH":
          this.data.src = "ETH.png"
          this.data.key = 2;
          break
        case "XRP":
          this.data.src = "XRP.png"
          this.data.key = 3;
          break

        case "BNB":
          this.data.src = "BNB.png"
          this.data.key = 4;
          break

        case "LTC":
          this.data.src = "LTC.png"
          this.data.key = 5;
          break

        case "ETC":
          this.data.src = "ETC.png"
          this.data.key = 6;
          break
        
        case "DASH":
          this.data.src = "dash.png"
          this.data.key = 7;
          break

        case "WAVES":
          this.data.src = "WAVES.png"
          this.data.key = 8;
          break

        default:
          break
      }
    },
    getPrice(){
       axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.data.name}&tsyms=USDT`).then(res => {
        this.data.price = eval(`res.data.${this.data.name}.USDT`);
      })
    },
    addData() {
      this.$store.dispatch("crypt/addData", Object.assign({}, this.data));
     
    }
  },

  

}
</script>

<style lang="scss" scoped>
.details-pop-up {
  min-height: 100vh;
  padding: 60px;

  &__heading {
    font-weight: 600;
    font-size: 35px;
    margin-top: 40px;
  }

  &__close {
    position: absolute;
    right: 15px;
    top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    &--img {
      width: 20px;
      height: 20px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    &--input {
      @include input();
    }

    &--button {
      @include custom-button();
      margin-top: 20px;
      background: rgb(247, 152, 27);
      color: white;
    }
  }
}
</style>
