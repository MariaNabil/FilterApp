import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {secondColor} from '../../../constants/Colors';
import {mediumFontSize, smallPadding} from '../../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FilterSectionItem = props => {
  const {
    item: {item},
  } = props;
  const {Name} = item;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        paddingVertical: smallPadding,
        justifyContent: 'space-between',
      }}>
      <Text style={{color: secondColor, fontSize: mediumFontSize}}>{Name}</Text>
      <MaterialIcons
        name={'keyboard-arrow-down'}
        size={25}
        color={secondColor}
      />
    </TouchableOpacity>
  );
};

export default FilterSectionItem;
