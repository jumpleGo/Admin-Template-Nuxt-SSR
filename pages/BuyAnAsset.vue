<template>
    <div class="row">
                    <!-- .col -->
                    <div id="balance" class="col-md-12 col-lg-6 col-sm-12 ">
                        <div class="white-box" style="display: flex;align-items:center;justify-content: space-between;">
                            <h3 class="box-title">USD</h3>
                            <h3 class="box-title balance_usd"></h3>
                            <button data-toggle="modal" data-target="#exampleModal"
                                class="btn btn-danger">Withdrawal</button>
                        </div>

                        <div class="white-box" style="display: flex;align-items:center;justify-content: space-between;">
                            <h3 class="box-title">Tencent</h3>
                            <h3 class="box-title balance_token"></h3>
                            <div>
                                <button class="btn btn-danger" data-toggle="modal" data-target="#deposit">Deposit</button>
                            <button style="margin-left: 10px;" class="btn btn-danger sell">Sell</button>
                            </div>
                        </div>
                    </div>


                    <!-- /.col -->
                </div>
</template>