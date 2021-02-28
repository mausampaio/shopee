import { localePriceFormater } from "./localePriceFormater";

export const priceFormatter = (price) => {
  const formatPrice = localePriceFormater(price);
  let splitedPrice = formatPrice.split("");
  const reais = splitedPrice[0] + splitedPrice[1];
  let value = "";
  for (let i = 2; i < splitedPrice.length; i++) {
    value += splitedPrice[i];
  }
  splitedPrice = value.split(",");
  const reaisValues = splitedPrice[0];
  const cents = splitedPrice[1];
  return (
    <>
      <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500" }}>
        {reais}
      </span>
      <span style={{ fontSize: "32px", lineHeight: "24px", fontWeight: "500" }}>
        {reaisValues}
      </span>
      <span style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
        ,{cents}
      </span>
    </>
  );
};
