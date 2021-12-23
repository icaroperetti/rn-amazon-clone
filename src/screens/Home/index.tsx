import React from 'react';
import {View} from 'react-native';
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  return (
    <View>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  );
};

export default HomeScreen;
