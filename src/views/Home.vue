<template>
  <div class="home container">
    <!--Header-->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter By Status</span>
          <img src="../assets/icon-arrow-down.svg" alt="" />
          <ul class="filter-menu" v-show="filterMenu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="../assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <!--Invoice List-->
    <div v-if="invoiceData.length > 3">
      <Invoice v-for="(invoice,index) in invoiceData"   :invoice="invoice" :key="index"/>
    </div>

    <div v-else class="empty flex flex-column">
      <img src="../assets/illustration-empty.svg" alt="">
      <h3>There is nothing here</h3>
      <p>Create an invoice by clicking the New Invoice button and get started</p>

    </div>
  </div>
</template>

<script>
import Invoice from  "../components/Invoice.vue"
import { mapMutations , mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {
    Invoice,
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
  computed: {
    ...mapState(["invoiceData"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;
      }

      span {
        font-size: 12px;
      }
    }

    .filter {
      margin-right: 40px;
      cursor: pointer;

      img {
        margin-left: 12px;
        width: 15px;
        height: 12px;
      }

      .filter-menu {
        width: 120px;
        position: absolute;
        top: 25px;
        list-style: none;
        background-color: #363636;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          cursor: pointer;
          font-size: 12px;
          padding: 10px 15px;

          &:hover {
            background-color: #fff;
            color: #363636;
          }
        }
      }
    }

    .button {
      padding: 8px 10px;
      background-color: #57acdc;
      border-radius: 40px;

      .inner-button {
        margin-right: 8px;
        border-radius: 50%;
        padding: 8px;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  .empty {
    margin-top:90px;
    align-items:center;

    img {
      width:240px;
    }

    h3{
      font-size : 20px;
      margin-top: 50px;
    }
    p{
      text-align : center;
      max-width:224px;
      font-size:12px;
      font-weight:300;
      margin-top:16px;
    }
  }
}
</style>
