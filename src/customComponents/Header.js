import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {mainColor, secondColor} from '../constants/Colors';
import {largeFontSize, largePadding, smallPadding} from '../constants/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return [
    <StatusBar key={0} backgroundColor={mainColor} translucent={false} />,
    <View
      key={1}
      style={{
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        marginBottom: 0.5,
        backgroundColor: mainColor,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingHorizontal: largePadding,
      }}>
      <AntDesign name={'close'} size={20} color={secondColor} />
      <Text
        style={{
          color: secondColor,
          fontSize: largeFontSize,
          fontWeight: 'bold',
          paddingHorizontal: smallPadding,
        }}>
        {'Filter Results'}
      </Text>
    </View>,
  ];
};

export default Header;
