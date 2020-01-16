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
        @change="addSrc"
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
export default {
  data() {
    return {
      data: {
        name: "",
        src: ""
      },

      cryptocurrencyes: [
        { name: "BTC" },
        { name: "ETH" },
        { name: "XRP" },
        { name: "ETC" },
        { name: "LTC" },
        { name: "BNB" }
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
          this.data.src = "BTC.png"
          break
        case "ETH":
          this.data.src = "ETH.png"
          break
        case "XRP":
          this.data.src = "XRP.png"
          break

        case "BNB":
          this.data.src = "BNB.png"
          break

        case "LTC":
          this.data.src = "LTC.png"
          break

        case "ETC":
          this.data.src = "ETC.png"
          break

        default:
          break
      }
    },
    addData() {
      this.$store.dispatch("crypt/addData", Object.assign({}, this.data))
    }
  }
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
