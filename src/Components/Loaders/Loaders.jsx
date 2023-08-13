import { getShoppingCart } from "../Utilitis/fakedb";

const CartProductsLoaders = async () => {
  const loadedProducts = await fetch("rings.json");
  const rings = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];

  // step 1: get id of the addedProduct
  for (const id in storedCart) {
    // step 2: get product from products state by using id
    const addedRing = rings.find((ring) => ring.id === id);
    if (addedRing) {
      // step 3: add quantity
      const quantity = storedCart[id];
      addedRing.quantity = quantity;
      // step 4: add the added product to the saved cart
      savedCart.push(addedRing);
    }
  }
  // step 5: set / return the cart
  return savedCart;
};

export default CartProductsLoaders;
