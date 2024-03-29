import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedValue, setSelectedValue] = React.useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = React.useState(1);

  const onMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* TODO - Create Carousel */}

      {/* Image Carousel */}

      {/* Option Selector */}
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => setSelectedValue(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>Price: {product.price}</Text>
      {product.oldPrice && (
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
      )}

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity */}
      <QuantitySelector quantity={quantity} onMinus={onMinus} onPlus={onPlus} />

      {/* Buttons */}
      <Button
        text="Add To Cart"
        onPress={() => {
          console.log('Add To Cart');
        }}
      />
      <Button text="Buy Now" onPress={() => {}} />
    </View>
  );
};

export default ProductScreen;
