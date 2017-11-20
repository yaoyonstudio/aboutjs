class Cart {
  constructor () {
    this.cartList = ['coffee', 'apple', 'water']
  }
  // public methods
  getCartList () {
    return this.cartList
  }
  // private methods
  addGoods (item) {
    this.cartList.push(item)
  }
}

export default Cart

