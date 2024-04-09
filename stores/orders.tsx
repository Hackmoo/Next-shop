import api from "@/api";
import { makeAutoObservable } from "mobx";

class Orders {
  orders = [];
  ordersToShow = []
  cart = [] as Object[]

  constructor() {
    makeAutoObservable(this, {}, {deep: true})
  }

  async getOrders() {
    const resp = await api.orders.getOrders();
    if (resp && resp.data) {
      this.orders = resp.data
      this.ordersToShow = resp.data
    }
  }

  async getItem(id: string | string[]) {
    if(!id) return;
    const resp = await api.orders.getOrder(id)
    if(resp && resp.data) return resp.data
  }

  changeOrdersToShow(query: string) {
    this.ordersToShow = this.orders.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

  addToCart(item: Object) {
    if(this.cart.find(el => el.id === item.id) === undefined) {
      this.cart = [...this.cart, item]
    }
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(el => el.id !== id)
  }

  get totalPrice() {
    const _cartPrices = this.cart.map(el => el.price)
    if(_cartPrices.length !== 0) return _cartPrices.reduce((el,total) => el + total).toFixed(2)
    return 0
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Orders();
