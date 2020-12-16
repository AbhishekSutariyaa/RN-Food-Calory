import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from './Theme';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../redux/CartReducer';

const FoodDetails = ({route, navigation}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);
  const addItemToCart = (item) => dispatch({type: ADD_TO_CART, payload: item});
  const removeItemFromCart = (item) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  const isDataInCart = cartItems.some((item) => item == data);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FullImage', {itemId: data.image})}>
        <Image
          style={styles.mobileImage}
          source={{url: data.image}}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <View style={{marginTop: 15}}>
        <View style={styles.titleView}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'green'}}>
            {data.model}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Weight: {data.price}
          </Text>
        </View>
        <View style={[styles.titleView, {justifyContent: 'center'}]}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 20}}>Detail</Text> */}
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.categorycolor,
              marginTop: 20,
            }}>
            <Button
              title={!isDataInCart ? 'Add to Favorite' : 'Remove from Favorite'}
              onPress={() =>
                !isDataInCart ? addItemToCart(data) : removeItemFromCart(data)
              }></Button>
          </View>
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data.detail}
        renderItem={({item, index}) => {
          return (
            <View style={styles.detailItemcontainer}>
              <Text style={{fontWeight: 'bold', color: COLORS.background}}>
                {item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  mobileImage: {width: '100%', height: 260},
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 50,
  },
  detailItemcontainer: {
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
    backgroundColor: COLORS.categorycolor,
  },
};

export default FoodDetails;
