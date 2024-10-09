type TCatalogItem = {
  id: number; // NOTE: почему не может быть undefined в отличие от остальных полей ???
  url: string; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
  img: string; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
  title: string; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
  currencyCode: string; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
  price: string; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
  quantity: number; // NOTE: might be undefined 👈️ ПОЧЕМУ ???
};

export default TCatalogItem;
