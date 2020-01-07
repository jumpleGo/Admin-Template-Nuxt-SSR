<template>
    <div class="row">
                    <div id="sell_tokens" class="white-box col-lg-6" style="flex-direction: column;">
                        <h3 class="box-title">Sell Tokens</h3>
                        <p>token price 9$</p>
                        <input style="padding:10px;" id="total_tokens" type="number" placeholder="total tokens">

                        <input style="padding:10px;margin-top:20px;" id="total_price" placeholder="total price"
                            disabled>

                        <button style="width: 100%;margin-top:20px" class="btn btn-danger sell_btn">Sell</button>
                        <p class="err"></p>
                    </div>
                </div>
</template>