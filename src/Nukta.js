import React from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { Button, CardItem, H3 } from 'native-base';

const styles = StyleSheet.create({
   nuktaImage: {
       resizeMode: 'contain',
       height: 200
   },
   nuktaHeader : {
       marginLeft: -5,
       marginTop: 5,
       marginBottom: (Platform.OS==='ios') ? -7 : 0,
       lineHeight: 24,
       color: '#5357b6'
   },
});

const Nukta = ({ joke, img, onClose }) => {
  return (
    <CardItem cardBody style={ { justifyContent: 'flex-start' } }>
        <Image style={ styles.nuktaImage } source={ { uri: img } }  />
        <H3 style={ styles.nuktaHeader }>{ joke }</H3>
        <Button danger style={ { alignSelf: 'flex-end' } } onPress={ onClose }>
            Go Back
        </Button>
    </CardItem>
  );
};

export default Nukta;
