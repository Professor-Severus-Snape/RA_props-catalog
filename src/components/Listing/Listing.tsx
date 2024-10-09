import ProductItem from '../ProductItem/ProductItem';
import TCatalogItem from '../../models/TCatalogItem';
import './listing.css';

type TListingProps = {
  catalog: TCatalogItem[];
};

const Listing = ({ catalog }: TListingProps) => {
  return (
    <div className="item-list">
      {catalog.map((item, idx) => <ProductItem key={idx} item={item}/>)}
    </div>
  );
};

export default Listing;
