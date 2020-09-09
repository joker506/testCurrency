<template >
  <div class="mainRates">
    <div class="mainRates__wrapp">
      <input class="mainRates__input" type="text" v-model="inputValue" />
      <label class="mainRates__label" for="inputValue">{{base}}</label>

      <div class="mainRates__card" v-for="(item,index) in cardPagination" :key="index">
        <template>
          <p class="card__value">{{item[0]}} =</p>
          <p class="currency__value">{{(inputValue*item[1]).toFixed(2)}}</p>
        </template>
      </div>

      <div class="mainRates__card" v-for="(i,value) in infoFromState" :key="i">
        <template>
          <p class="card__value">{{value}} =</p>
          <p class="currency__value">{{(inputValue*i).toFixed(2)}}</p>
        </template>
      </div>

      <div class="btn__wrap">
        <button class="btn__prev" @click="lastPage">Назад</button>
        <button class="btn__next" @click="nextPage">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      base: "USD",
      inputValue: 1,
      pageNumber: 3,
      sizeCard: 3
    };
  },
  methods: {
    lastPage() {
      this.pageNumber--;
    },
    nextPage() {
      this.pageNumber++;
    }
  },
  computed: {
    ...mapState({
      infoFromState: state => state.exchange.changeBase.rates
    }),
    ...mapGetters({
      foo: "exchange/changeState"
    }),

    cardPagination() {
      let start = this.pageNumber + this.sizeCard;
      let end = start + this.sizeCard;
      return this.foo.slice(start, end);
    }
  }
};
</script>
<style lang="scss" scoped>
.mainRates {
  width: 320px;
  background: F2F2F2;
  box-sizing: border-box;
  padding: 30px 0;
}
.mainRates__wrapp {
  width: 272px;
  margin: 0 auto;
}
.mainRates__input {
  width: 121px;
  height: 26px;
  box-sizing: border-box;
  margin-left: 114px;
  padding: 5px;
  padding-right: 10px;
  text-align: end;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
}
.mainRates__label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #b9b9b9;
}
.mainRates__card {
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
  border-radius: 12px;
}
.card__value {
  margin-left: 30px;
  padding-top: 30px;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.0128571px;
  color: #2b2d33;
}
.currency__value {
  padding-bottom: 19px;
  margin-left: 30px;
  text-align: left;
  font-weight: 300;
  font-size: 36px;
  color: #2b2d33;
}
.btn__wrap {
  display: flex;
  justify-content: space-around;
}
.btn__next,
.btn__prev {
  width: 112px;
  height: 34px;
  background: #ffffff;
  box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>

