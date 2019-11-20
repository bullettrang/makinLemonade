export const getItemQuantity = (quantity, base = 10) => {
  return parseInt(quantity, base);
};

export const createLineItem = (variantId, quantity) => {
  return [{ variantId, quantity: getItemQuantity(quantity) }];
};

export const createUpdatedLineItem = (lineItemId, quantity) => {
  return [{ id: lineItemId, quantity: getItemQuantity(quantity) }];
};
