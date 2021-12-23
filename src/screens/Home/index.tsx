import React from 'react';
import {View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <ProductItem item={products[0]} />
      <ProductItem item={products[1]} />
      <ProductItem item={products[3]} />
      <ProductItem item={products[4]} />
    </View>
  );
};

export default HomeScreen;
