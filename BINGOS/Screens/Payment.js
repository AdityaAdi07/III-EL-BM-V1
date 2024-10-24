import React from 'react';
import {Button, Linking, Text, View} from 'react-native';

const Payment = () => {
  const upiURL = 'upi://pay';
  const upiOpener = () => {
    Linking.openURL(upiURL);
  };
  return (
    <View>
      <Text>Payment</Text>
      <Button title=""></Button>
    </View>
  );
};

export default Payment;
