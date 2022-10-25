<template>
  <div class="modal flex">
    <div class="modal-content">
      <p>Are You Sure You Want To Exit ? your Changes will not be Saved !</p>
      <div class="actions flex">
        <button @click="closeModal" class="blue">Return</button>
        <button @click="closeInvoice" class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_INVOICE"]),

    closeModal() {
      this.TOGGLE_MODAL();
    },

    closeInvoice() {
      this.TOGGLE_MODAL();
      this.TOGGLE_INVOICE();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #363636;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;

      button {
        flex: 1;
      }
    }
  }
}
</style>
