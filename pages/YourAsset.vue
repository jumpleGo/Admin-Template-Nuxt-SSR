<template>
  <div>
    <div class="white-box col-lg-6">
      <h3 class="box-title">
        Sell Tokens
      </h3>
      <p>token price 9$</p>
      <input class="total_tokens" type="number" placeholder="total tokens">

      <input class="total_price" placeholder="total price" disabled>

      <button class="button-custom">
        Sell
      </button>
      <p class="err" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-box {
  flex-direction: column;
}

.total_tokens {
  border: none;
  box-shadow: inset -3px -2px 6px 0px rgba(255, 255, 255, 0.877),
    inset 3px 2px 3px 2px rgba(0, 0, 0, 0.13),
    3px 2px 6px 0px rgba(0, 0, 0, 0.13), -3px -2px 6px 0px rgb(255, 255, 255);
  padding: 10px;

  &:focus {
    outline: none;
  }
}

.total_price {
  border: none;
  box-shadow: inset -3px -2px 6px 0px rgba(255, 255, 255, 0.877),
    inset 3px 2px 3px 2px rgba(0, 0, 0, 0.13),
    3px 2px 6px 0px rgba(0, 0, 0, 0.13), -3px -2px 6px 0px rgb(255, 255, 255);
  padding: 10px;
  margin-top: 20px;
  background: #f5f5f5;
}

.button-custom {
  @include custom-button();
  margin-top: 20px;
  color: rgb(19, 19, 19);
  background: #f5f5f5;
  border-radius: 4px;
}
</style>

<script>
export default {
  head: {
    title: "Your Assets",
    meta: [
      {
        name: "description",
        content: "Sell your tokens"
      }
    ]
  }
}
</script>
