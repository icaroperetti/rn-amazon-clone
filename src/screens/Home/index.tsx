import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        renderItem={({item}) => <ProductItem item={item} />}
        data={products}
      />
    </View>
  );
};

export default HomeScreen;
