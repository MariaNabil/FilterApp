import {Switch, Text, View} from 'react-native';
import React from 'react';
import {
  darkColor,
  secondColor,
  switchTrackColor,
  thirdColor,
} from '../../../constants/Colors';
import styles from './styles';
const SwitchItem = props => {
  const {Id, Name, isSelected, onToggleSwitch} = props;
  return (
    <View style={styles.root}>
      <Text style={styles.filterName}>{Name}</Text>
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
