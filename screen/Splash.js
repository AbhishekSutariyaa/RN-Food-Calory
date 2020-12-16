import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS} from '../screen/Theme';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/meal.png')}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 20}}>
        {'Food Calories'}
      </Text>
    </View>
  );
};

export default Splash;
