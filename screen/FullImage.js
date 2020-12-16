import React from 'react';
import {Image, Dimensions, TouchableOpacity} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const FullImage = ({route, navigation}) => {
  const {itemId} = route.params;

  return (
    <ImageZoom
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
      enableCenterFocus
      useNativeDriver
      pinchToZoom
      enableDoubleClickZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={Dimensions.get('window').width}
      imageHeight={Dimensions.get('window').height}>
      <Image
        resizeMode={'contain'}
        style={{width: '100%', height: '100%'}}
        source={{uri: itemId}}
      />
    </ImageZoom>
  );
};

export default FullImage;
