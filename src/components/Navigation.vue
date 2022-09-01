<template>
  <header class="flex">
    <div class="branding flex">
      <img src="../assets/file-invoice.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #363636;
  @media (min-width: 900px) {
    flex-direction: column;
    min-width: 90px;
    min-height: 100%;
    border-radius: 0 20px 20px 0;
  }
}
.branding {
  border-radius: 0 20px 20px 0;
  background-color: #57acdc;
  justify-content: center;
  padding: 24px;
  @media (min-width: 900px) {
    width: 100%;
  }

  img {
    width: auto;
    height: 30px;
  }
}
</style>