import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';
import ProductScreen from '../ProductScreen';

const HomeScreen = () => {
  return (
    <View>
      {/* <FlatList
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        data={products}
      /> */}
      <ProductScreen />
    </View>
  );
};

export default HomeScreen;
