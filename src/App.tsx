import Listing from './components/Listing/Listing';
import TCatalogItem from './models/TCatalogItem';
import etsy from './data/etsy.json';

export default function App() {
  const activeEtsy = etsy.filter((item) => item.state === 'active');

  const catalog: TCatalogItem[] = [];

  activeEtsy.forEach((item) => {
    catalog.push({
      id: item.listing_id,
      url: item.url || '',
      img: item.MainImage?.url_570xN || '',
      title: item.title || '',
      currencyCode: item.currency_code || '',
      price: item.price || '',
      quantity: item.quantity || 0,
    });
  });

  return <Listing catalog={catalog} />;
}
