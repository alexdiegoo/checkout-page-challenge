const product1 = document.querySelector('#vintage-backdag');
const product2 = document.querySelector('#levi-shoes');
const products = [
  product1,
  product2
]
const total = document.querySelector('#total');

const addProductQuantity = (product) => {
  const changedProduct = products[product];
  const value = Number(changedProduct.value);

  changedProduct.value = value + 1;

  newTotalValue();
}

const removeProductQuantity = (product) => {
  const changedProduct = products[product];
  const value = Number(changedProduct.value);

  if (value == 1) return;
  changedProduct.value = value - 1;

  newTotalValue();
}

const newTotalValue = () => {
  const product1Quantity = Number(product1.value);
  const product2Quantity = Number(product2.value);

  const newValue = (product1Quantity * 54.99) + (product2Quantity * 74.99) + 19;
  const value = newValue.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})
  total.textContent = value
}
