import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {DEVICEDETAIL} from '../Data';
import {COLORS} from './Theme';

const CategoryDetails = ({route, navigation}) => {
  const {itemId} = route.params;

  const data = DEVICEDETAIL.filter((item) => item.id == itemId);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('FoodDetails', {data: item})}
              style={styles.listContainer}
              activeOpacity={1}>
              <Image
                style={{width: '90%', height: '80%'}}
                source={{url: item.image}}
              />
              <View
                style={{
                  backgroundColor: COLORS.categorycolor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90%',
                  height: 70,
                }}>
                <Text
                  numberOfLines={1}
                  style={[styles.modelTxt, {textAlign: 'center'}]}>
                  {item.model}
                </Text>
              </View>
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
    // backgroundColor: COLORS.categorycolor,
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

export default CategoryDetails;
