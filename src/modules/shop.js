export default ({
  state: {
    shopList: [
      {
        id: 1,
        title: "Скатерть 27778000",
        descr: "Тканевая скатерть Altali изготовлена из натурального 100% хлопка. Изделие имеет прямоугольную форму и оптимальный размер 136х170 см. Текстильная скатерть подходит для стандартных кухонных столов от 70х120 см до 110х150 см. Хлопковая ткань практичная, прочная, экологичная и гипоаллергенная. Рисунок не истирается, не линяет, не выгорает на солнце.",
        img: require('../assets/img/sk_1-1.jpg'),
        gallery: [
          { name: "tablecloth one", img: require('../assets/img/sk_1-1.jpg')},
          { name: "tablecloth two", img: require('../assets/img/sk1_1-2.jpg')},
          { name: "tablecloth three", img: require('../assets/img/sk_1-3.jpg')},
          { name: "tablecloth four", img: require('../assets/img/sk_1-4.jpg')}
        ]
      },
      {
        id: 2,
        title: "Скатерть 38709870",
        descr: "Тканевая скатерть Altali изготовлена из натурального 100% хлопка. Изделие имеет прямоугольную форму и оптимальный размер 136х170 см. Текстильная скатерть подходит для стандартных кухонных столов от 70х120 см до 110х150 см. Хлопковая ткань практичная, прочная, экологичная и гипоаллергенная. Рисунок не истирается, не линяет, не выгорает на солнце.",
        img: require('../assets/img/sk_2-1.jpg'),
        gallery: [
          { name: "tablecloth one", img: require('../assets/img/sk_2-1.jpg')},
          { name: "tablecloth two", img: require('../assets/img/sk_2-2.jpg')},
          { name: "tablecloth three", img: require('../assets/img/sk_2-3.jpg')},
          { name: "tablecloth four", img: require('../assets/img/sk_2-4.jpg')}
        ]
      },
      {
        id: 3,
        title: "Скатерть 12398760",
        descr: "Тканевая скатерть Altali изготовлена из натурального 100% хлопка. Изделие имеет прямоугольную форму и оптимальный размер 136х170 см. Текстильная скатерть подходит для стандартных кухонных столов от 70х120 см до 110х150 см. Хлопковая ткань практичная, прочная, экологичная и гипоаллергенная. Рисунок не истирается, не линяет, не выгорает на солнце.",
        img: require('../assets/img/sk_3-1.jpg'),
        gallery: [
          { name: "tablecloth one", img: require('../assets/img/sk_3-1.jpg')},
          { name: "tablecloth two", img: require('../assets/img/sk_3-2.jpg')},
          { name: "tablecloth three", img: require('../assets/img/sk_3-3.jpg')},
          { name: "tablecloth four", img: require('../assets/img/sk_3-4.jpg')}
        ]
      },
      {
        id: 4,
        title: "Скатерть 00098760",
        descr: "Тканевая скатерть Altali изготовлена из натурального 100% хлопка. Изделие имеет прямоугольную форму и оптимальный размер 136х170 см. Текстильная скатерть подходит для стандартных кухонных столов от 70х120 см до 110х150 см. Хлопковая ткань практичная, прочная, экологичная и гипоаллергенная. Рисунок не истирается, не линяет, не выгорает на солнце.",
        img: require('../assets/img/sk_4-1.jpg'),
        gallery: [
          { name: "tablecloth one", img: require('../assets/img/sk_4-1.jpg')},
          { name: "tablecloth two", img: require('../assets/img/sk_4-2.jpg')},
          { name: "tablecloth three", img: require('../assets/img/sk_4-3.jpg')},
          { name: "tablecloth four", img: require('../assets/img/sk_4-4.jpg')}
        ]
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    },
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id == id)
    }
  },
})