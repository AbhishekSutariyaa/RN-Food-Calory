import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from './Theme';

const Favorite = ({navigation}) => {
  const cartItems = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={cartItems}
        ListEmptyComponent={
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              alignSelf: 'center',
            }}>
            No data found in Favorite
          </Text>
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('FoodDetails', {data: item})}
              style={styles.listContainer}>
              <Image
                style={{width: '90%', height: '80%'}}
                source={{url: item.image}}
              />
              <Text numberOfLines={2} style={styles.modelTxt}>
                {item.model}
              </Text>
            </TouchableOpacity>
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
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: COLORS.categorycolor,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  modelTxt: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.background,
  },
};

export default Favorite;
