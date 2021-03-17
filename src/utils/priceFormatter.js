import { localePriceFormater } from "./localePriceFormater";

export const priceFormatter = ({ price, formatCents }) => {
  if (!price || !formatCents) return;
  const formatPrice = localePriceFormater(price);
  let splitedPrice = formatPrice.split("");
  const reais = splitedPrice[0] + splitedPrice[1];
  let value = "";
  for (let i = 2; i < splitedPrice.length; i++) {
    value += splitedPrice[i];
  }
  let cents = "";
  let fontSize = "48px";
  let reaisFontSize = "24px";
  let top = "10%";
  if (formatCents === true) {
    fontSize = "32px";
    reaisFontSize = "20px";
    top = "0";
    splitedPrice = value.split(",");
    value = splitedPrice[0];
    cents = splitedPrice[1];
  }
  return (
    <>
      <span
        style={{
          fontSize: reaisFontSize,
          lineHeight: "24px",
          fontWeight: "500",
          paddingTop: top,
        }}
      >
        {reais}
      </span>
      <span
        style={{
          fontSize: fontSize,
          lineHeight: "24px",
          fontWeight: "500",
        }}
      >
        {value}
      </span>
      {formatCents === true && (
        <span
          style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}
        >
          ,{cents}
        </span>
      )}
    </>
  );
};
