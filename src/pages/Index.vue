<template>
  <div class="index__wrapp">
    <CurrencyRates />
    <MainRates />
  </div>
</template>

<script>
import CurrencyRates from "@/pages/components/CurrencyRates";
import MainRates from "@/pages/components/MainRates";
export default {
  name: "Index",
  components: {
    CurrencyRates,
    MainRates
  }
};
</script>

<style></style>
