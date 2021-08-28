import React from 'react';
import { View, Text } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';
import FeatherIcon from 'react-native-vector-icons/Feather'

const toastConfig = {
  success: ({ text1, ...rest }: BaseToastProps) => (
    <View style={{
      height: 86, width: '95%',
      backgroundColor: '#62B5F7', justifyContent: 'center', borderRadius: 8,
      paddingLeft: 20
    }}>
      <View style={{ flexDirection: 'row' }}>
        <FeatherIcon name='alert-circle' size={24} color='#ffffff' />
        <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 10 }}>{text1}</Text>
      </View>
    </View>
  ),
  error: ({ text1, ...rest }: BaseToastProps) => (
    <View style={{
      height: 86, width: '95%',
      backgroundColor: '#FF0000', justifyContent: 'center', borderRadius: 8,
      paddingLeft: 20
    }}>
      <View style={{ flexDirection: 'row' }}>
        <FeatherIcon name='alert-circle' size={24} color='#ffffff' />
        <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 10 }}>{text1}</Text>
      </View>
    </View>
  )
};

export default toastConfig;