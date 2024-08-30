"use strict ";
function getShippingCost(country) {
  const china = "China";
  const chinaPrise = 100;
  const chile = "Chile";
  const chilePrise = 250;
  const australia = "Australia";
  const australiaPrise = 170;
  const jamaica = "Jamaica";
  const jamaicaPrice = 120;
  switch (country) {
    case china:
      return `Shipping to ${china} will cost ${chinaPrise} credits`;
      breake;
    case chile:
      return `Shipping to ${chile} will cost ${chilePrise} credits`;
      breake;
    case australia:
      return `Shipping to ${australia} will cost ${australiaPrise} credit`;
      breake;
    case jamaica:
      return `Shipping to ${jamaica} will cost ${jamaicaPrice} credit`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"