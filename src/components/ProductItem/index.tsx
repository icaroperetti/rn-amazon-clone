import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductItem = () => {
  return (
    <View style={styles.page}>
      {/* Render product component */}
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Clean Code: A Handbook of Agile Software Craftsmanship
          </Text>
          <View style={styles.ratingsContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color={'#e47911'}
            />
            <Text>13.000</Text>
          </View>
          <Text style={styles.price}>Price $13.57</Text>
          <Text style={styles.oldPrice}>$16.22</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
