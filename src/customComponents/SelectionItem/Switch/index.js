import {Switch, Text, View} from 'react-native';
import React from 'react';
import {
  darkColor,
  secondColor,
  switchTrackColor,
  thirdColor,
} from '../../../constants/Colors';
const SwitchItem = props => {
  const {Id, Name, isSelected, onToggleSwitch} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: secondColor}}>{Name}</Text>
      <Switch
        trackColor={{false: darkColor, true: switchTrackColor}}
        thumbColor={isSelected ? secondColor : thirdColor}
        onValueChange={() => {
          onToggleSwitch(Id);
        }}
        value={isSelected}
      />
    </View>
  );
};

export default SwitchItem;
