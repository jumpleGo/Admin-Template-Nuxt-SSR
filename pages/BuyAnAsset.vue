<template>
  <div>
    <!-- {
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
          } -->
    <!-- .col -->
    <div id="balance" class="col-md-12 col-lg-6 col-sm-12 ">
      <div class="white-box">
        <h3 class="box-title">
          USD
        </h3>
        <h3 class="box-title balance_usd">
          0
        </h3>
        <button class="button-custom">
          Withdrawal
        </button>
      </div>

      <div class="white-box">
        <h3 class="box-title">
          Tencent
        </h3>
        <h3 class="box-title balance_token">
          0
        </h3>
        <div>
          <button class="button-custom">
            Deposit
          </button>
          <button class="button-custom">
            Sell
          </button>
        </div>
      </div>
    </div>

    <!-- /.col -->
  </div>
</template>

<style lang="scss" scoped>
.white-box {
  justify-content: space-between;

  .button-custom {
    @include custom-button;

    &:not(:first-of-type) {
      margin-left: 15px;
    }
  }

  .box-title {
    font-size: 22px;
    font-weight: 500;
  }
}

.white-box + .white-box {
  margin-top: 40px;
}
</style>

<script>
export default {
  head: {
    title: "Buy An Asset",
    meta: [
      {
        name: "description",
        content: "Template with information about balances"
      }
    ]
  }
}
</script>
