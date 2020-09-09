<template >
  <div class="currencyRates__wrapp">
    <h2 class="currencyRates__title">Курс {{ curren.toUpperCase() }} сегодня</h2>
    <div class="currencyRates__wrap">
      <button class="arrow" @click="nextPage"></button>
      <div class="currencyRates__items">
        <div class="currencyRates__item" v-for="item in paginationPages" :key="item.id">
          <p @click="getValue" v-if="valueCurrency.rates">{{item}}</p>
        </div>
      </div>
      <button class="arrow__right" @click="nextPage"></button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      rate: null,
      curren: "eur",
      currencyValue: "",
      number: 3,
      count: 1,
      size: 3,
      pageNumber: 1,
      current: 0
    };
  },

  computed: {
    ...mapState({
      valueCurrency: state => state.exchange.curren
    }),
    ...mapGetters({
      cha: "exchange/changeRates"
    }),

    pages() {
      // console.log(Math.ceil(this.cha.length / 17));
      return Math.ceil(this.cha.length / 17);
    },
    paginationPages() {
      let start = this.pageNumber + this.size;
      let end = start + this.size;
      return this.cha.slice(start, end);
    }
  },
  methods: {
    ...mapActions({
      addBaseRate: "exchange/setCurrencyBase"
    }),
    getValue(e) {
      this.currencyValue = e.currentTarget.innerText;
      this.$store.commit("exchange/SET_BASERATES", this.currencyValue);
      this.addBaseRate(e.currentTarget.innerText);
    },
    nextPage() {
      this.pageNumber++;
    },
    lastPage() {
      this.pageNumber--;
    },
    qwe(page) {
      this.pageNumber = page;
      //console.log(page);
    },

    nextQ(rates) {
      rates.id = this.current;
      this.current = rates.id;
      if (this.current < this.questions.length - 1) this.current++;
      this.selected++;
      //console.log(rates.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.activeItem {
  background-color: red;
}
.currencyRates__wrapp {
  width: 320px;
  height: 111px;
  cursor: pointer;
  background: #ffe782;
  box-sizing: border-box;
}
.currencyRates__title {
  margin: 0;
  text-align: left;
  padding-left: 24px;
  padding-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  color: #2b2d33;
}
.currencyRates__wrap {
  display: flex;
  width: 263px;
  margin: 0 auto;
}
.currencyRates__items {
  display: flex;
  width: 220px;
  height: 48px;
  // border: 1px solid grey;
  margin: 0 auto;
  position: relative;
}
.currencyRates__item {
  width: 90px;
  height: 48px;
  // padding-top: 12px;
  //  border: 1px solid aqua;
  box-sizing: border-box;
  margin: 0;
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
}
.arrow {
  cursor: pointer;
  padding-top: 12px;
  border: none;
  background-color: transparent;
  outline: none;
  position: relative;
  &::before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: 17px;
    left: 0px;
    background-image: url("~@/assets/back.svg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
  }
}
.arrow__right {
  cursor: pointer;
  padding-top: 12px;
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
  &::after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: 17px;
    right: 0px;
    background-image: url("~@/assets/next.svg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
    &:hover {
      fill: #fff;
    }
  }
}
</style>

