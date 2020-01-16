<template>
  <div>
    <h2>Your Crypto Portfolio</h2>
    <div class="index container-fluid">
      <div class="row">
        <small-card
          v-for="(crypt, index) in crypts"
          :key="index"
          :crypt-info="crypt"
          class="col-lg-2 col-sm-4 col-xs-6 col-md-3 box"
          @mouseenter="showCloseButton(index)"
          @mouseleave="hideCloseButton(index)"
        >
          >
          <close-button class="delete" @click.native="deleteItem(index)" />
        </small-card>

        <add-new-crypt
          class="col-lg-2 col-md-3 col-sm-4 col-xs-6  box"
          @click.native="show = true"
        />
      </div>
    </div>
    <transition name="slide-fade">
      <details-pop-up
        v-if="show === true"
        class="details-pop-up"
        @closeModal="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton.vue"
import { mapGetters } from "vuex"
import AddNewCrypt from "@/components/AddNewCrypt.vue"
import DetailsPopUp from "@/components/DetailsPopUp.vue"
import SmallCard from "@/components/SmallCard.vue"
export default {
  components: {
    AddNewCrypt,
    DetailsPopUp,
    SmallCard,
    CloseButton
  },
  data() {
    return {
      show: false,
      crypts: this.cryptAdd
    }
  },

  created() {
    this.crypts = this.$store.getters["crypt/getCryptAdd"]
  },

  methods: {
    closeModal(data) {
      this.show = data
    },
    deleteItem(index) {
      this.crypts.splice(index, 1)
    },

    showCloseButton(index) {
      this.crypts[index].showClose = true
    },
    hideCloseButton(index) {
      this.crypts[index].showClose = false
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 20px;
  position: relative;
}

.box + .box {
  margin-left: 15px;
}

.index {
  position: relative;
}

.add-new-crypt-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  @include custom-button();
  padding: 20px;
  border-radius: 50%;
  z-index: 1;
}

.details-pop-up {
  position: fixed;
  top: 0;
  right: 0;
  background: #f5f5f5;
  box-shadow: -3px -2px 6px 0px rgba(0, 0, 0, 0.13),
    3px 2px 6px 0px rgb(255, 255, 255);
  z-index: 2;
}

.delete {
  position: absolute;
  top: 0;
  right: 7px;
}

.show {
  display: block;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}
</style>
