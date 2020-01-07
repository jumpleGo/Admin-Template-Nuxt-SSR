<template>
    <div class="row">
                    <div id="first-step" class="row">
                        <style>
                            .white-box:hover {
                                cursor: pointer;
                            }

                            .white-box img {
                                width: 40px;
                                height: auto;
                            }
                        </style>
                        <div class="col-lg-4 col-sm-6 col-xs-6 sec">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Cash</h3>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-xs-6 sec2">
                            <div style="display: flex;justify-content: space-between;align-items: center;"
                                class="white-box analytics-info">
                                <h3 class="box-title">Securities</h3>

                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-xs-6 crypt">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Сrypt</h3>
                                <ul class="list-inline two-part">

                                    <li class="text-right"><i class="ti-arrow-up text-info"></i> <span
                                            class=" text-info">4</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="message" class="white-box  col-xs-12">
                        <p></p>
                    </div>

                    <div id="second-step" class="row">
                        <div class="col-lg-2 col-sm-4 col-xs-6  col-lg-offset-2">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Bitcoin</h3>
                                <img src="images/BTC.png" alt="">
                            </div>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-xs-6 ">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Ethereum</h3>
                                <img src="images/ETH.png" alt="">
                            </div>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-xs-6 ">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Ripple</h3>
                                <img src="images/XRP.png" alt="">
                            </div>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-xs-6">
                            <div class="white-box analytics-info"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <h3 class="box-title">Tencent</h3>
                                <img src="images/TCT.png" alt="">
                            </div>
                        </div>
                    </div>

                    <div id="adress" class="white-box col-xs-12 col-lg-8 col-lg-offset-2">
                        <p></p>
                    </div>
                </div>
</template>