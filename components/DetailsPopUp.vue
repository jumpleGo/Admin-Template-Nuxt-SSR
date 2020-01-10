<template>
    <div class="details-pop-up">
        <div class="details-pop-up__close">
            <img @click="closePopUp()" class="details-pop-up__close--img" src="@/assets/buttons/close.png" alt="">
        </div>
        <h3 class="details-pop-up__heading">Add your info</h3>

        <form @submit.prevent="addData()" class="details-pop-up__form">
            <input v-model="crypt" class="details-pop-up__form--input" type="text" placeholder="Select crypto">
            <button class="details-pop-up__form--button">Add</button>
        </form>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            crypt: ''
        }
    },

    methods:{
        closePopUp(){
           this.$emit('closeModal', this.show = false)
        },
        addData(){
            this.$emit('addData', {
                name: this.crypt,
                src: 'BTC.png'
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .details-pop-up{
        min-height: 100vh;
        padding: 60px;

        &__heading{
            font-weight: 600;
            font-size: 35px;
            margin-top: 40px;
        }

        &__close{
           position: absolute;
            right: 15px;
            top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;

            &--img{
            width: 20px;
            height: 20px;
            }
    
        }

        &__form{
                display: flex;
                flex-direction: column;
                margin-top: 40px;

                &--input{
                    @include input();
                }

                &--button{
                    @include custom-button();
                    margin-top: 20px;
                    background: rgb(247, 152, 27);
                    color: white;
                }
            }
    }
</style>