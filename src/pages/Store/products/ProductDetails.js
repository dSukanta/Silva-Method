import React from 'react';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';
import ProductDetailsArea from './ProductDetailsArea';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
   const {id}= useParams();
   //console.log(id);

   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Shop"/>
         <ProductDetailsArea productId={id && id}/>
         <CustomFooter/>
      </>
   );
};

export default ProductDetails;