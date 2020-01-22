<template>
<div class="white-box">
    <div class="analytics-info">
        <h3 class="box-title">
            {{ cryptInfo.name }}
        </h3>
        <img :src="getUrl(cryptInfo.src)">
    </div>

    <close-button @click.native="deleteItem" class="delete" />
    <span v-if="!this.price">{{ cryptInfo.price }} USDT</span>
    <span v-else>{{ price }} USDT</span>
</div>
</template>

<script>
import axios from 'axios';
import CloseButton from "@/components/CloseButton.vue"
export default {
    name: "SmallCard",
    props: ["cryptInfo"],
    components: {
        CloseButton
    },

    data() {
        return {
            showClose: false,
            price: ''
        }
    },

    methods: {
        deleteItem() {
            this.$store.commit('crypt/filteringState', this.cryptInfo.key);
        },

        getUrl(src) {
            return require("@/assets/cryptos/" + src)
        },
        getPrice() {
            setInterval(() => {
                 axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.cryptInfo.name}&tsyms=USDT`).then(res => {
                    this.price = eval(`res.data.${this.cryptInfo.name}.USDT`);
                })
            }, 4000)
        }
    },
    mounted() {
        this.getPrice();
    }
}
</script>

<style lang="scss" scoped>
.analytics-info {
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    h3 {
        font-size: 22px;
        margin-right: 15px;
    }

    img {
        width: 30px;
        height: auto;
    }
}

.white-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

.delete {
    position: absolute;
    top: 0;
    right: 7px;
}
</style>
