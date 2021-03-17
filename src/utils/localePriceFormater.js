export function localePriceFormater(price) {
  if (!price) return;
  return price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
}
