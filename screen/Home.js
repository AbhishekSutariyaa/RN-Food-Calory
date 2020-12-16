import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FoodCategory from './FoodCategory';
import CategoryDetails from './CategoryDetails';
import Favorite from './Favorite';
import FoodDetails from './FoodDetails';

const Stack = createStackNavigator();

const CategoryRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodCategory"
        component={FoodCategory}
        options={{headerShown: false}}

        // options={{

        //   headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
        //   headerLeft: () => (
        //     <TouchableOpacity
        //       style={{
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         padding: 10,
        //       }}
        //       onPress={() => props.navigation.openDrawer()}>
        //       <Image
        //         style={{height: 25, width: 25}}
        //         source={require('../assets/list.png')}
        //       />
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
};

const CartRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
        // options={{
        //   title: 'Favorite',
        //   headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
        //   headerLeft: () => (
        //     <TouchableOpacity
        //       style={{
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         padding: 10,
        //       }}
        //       onPress={() => props.navigation.openDrawer()}>
        //       <Image
        //         style={{height: 25, width: 25}}
        //         source={require('../assets/list.png')}
        //       />
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        // options={{headerTitle: 'Full Image'}}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const Home = ({params}) => {
  return (
    <Drawer.Navigator initialRouteName="FoodCategory">
      <Drawer.Screen name="FoodCategory" component={CategoryRoute} />
      <Drawer.Screen name="Favorite" component={CartRoute} />
    </Drawer.Navigator>
  );
};

export default Home;
