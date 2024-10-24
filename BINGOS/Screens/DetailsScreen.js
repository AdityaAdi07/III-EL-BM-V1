import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Detail Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
