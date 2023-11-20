import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDipslay from '../Components/ProductDisplay/ProductDipslay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));


  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDipslay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;