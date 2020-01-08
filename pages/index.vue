<template>
<div>
    <div id="second-step" class="row">
        <div class="col-lg-2 col-sm-4 col-xs-6  col-lg-offset-2">
            <div class="white-box analytics-info">
                <h3 class="box-title">Bitcoin</h3>
                <img src="@/assets/cryptos/BTC.png" alt="">
            </div>
        </div>

        <div class="col-lg-2 col-sm-4 col-xs-6 ">
            <div class="white-box analytics-info" >
                <h3 class="box-title">Ethereum</h3>
                <img src="@/assets/cryptos/ETH.png" alt="">
            </div>
        </div>

        <div class="col-lg-2 col-sm-4 col-xs-6 ">
            <div class="white-box analytics-info" >
                <h3 class="box-title">Ripple</h3>
                <img src="@/assets/cryptos/XRP.png" alt="">
            </div>
        </div>

        <div class="col-lg-2 col-sm-4 col-xs-6">
            <div class="white-box analytics-info">
                <h3 class="box-title">Tencent</h3>
                <img src="@/assets/cryptos/TCT.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

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

</style>
