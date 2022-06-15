import axios from "axios";

function _change(obj) {
  let _obj = obj.rates;
  let keys = Object.keys(_obj);
  // console.log(keys);
  return keys;
}
function _changeState(obj) {
  let arr = Object.entries(obj);
  /* let nArr = [];
  arr.forEach((key, value) => {
    nArr.push(key, value);
  }); */
  //console.log(nArr);
  return arr;
}

const currency = {
  namespaced: true,

  state: {
    param: "",
    baseRates: "GBR",
    curren: {
      rates: {}
    },
    changeBase: {}
  },
  mutations: {
    SET_RATES(state, currency) {
      state.curren = currency;
      // console.log(state);
    },
    SET_BASERATES(state, payload) {
      // console.log(state, payload);
      this.baseRates = payload;
      console.log(this.baseRates);
    },
    SET_CHANGE_RATES(state, payload) {
      state.changeBase = payload;
      console.log(state.changeBase);
    }
  },
  getters: {
    changeRates(state) {
      // console.log(_change(state.curren));
      return _change(state.curren);
    },
    changeState(state) {
      //console.log(_changeState(state.curren.rates));
      return _changeState(state.curren.rates);
    }
  },
  actions: {
    setCurrency(context) {
      return axios
        .get("https://api.openrates.io/latest" + "base=USD")
        .then(response => {
          context.commit("SET_RATES", response.data);
        });
    },
    setCurrencyBase(context, baseRates) {
      console.log(baseRates);
      return axios
        .get("https://api.openrates.io/latest" + "?base=" + baseRates)
        .then(response => {
          context.commit("SET_CHANGE_RATES", response.data);
        });
    }
  }
};
export default currency;
