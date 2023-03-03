export default ({
  state: {
    shopList: [
      {
        id: 1,
        title: "jacket adidas",
        descr: "Двусторонняя молния, регулируемый складывающийся капюшон.100% переработанный полиэстер.Водонепроницаемая дышащая мембрана.",
        img: require('../assets/img/IMG_1345.JPG')
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    }
  },
})