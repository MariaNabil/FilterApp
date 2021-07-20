import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {smallPadding} from '../../../../constants/styles';
import {checkboxColor, secondColor} from '../../../../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = props => {
  const {
    item: {item},
    onSelectFilter,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onSelectFilter(props.Id, item.Id)}
      style={{
        flexDirection: 'row',
        paddingHorizontal: smallPadding,
        paddingVertical: 7,
        alignItems: 'center',
      }}>
      {item.isSelected ? (
        <MaterialCommunityIcons
          name={'checkbox-marked'}
          size={20}
          style={{paddingEnd: smallPadding}}
          color={secondColor}
        />
      ) : (
        <MaterialCommunityIcons
          name={'checkbox-blank-outline'}
          size={20}
          style={{paddingEnd: smallPadding}}
          color={checkboxColor}
        />
      )}

      <Text
        style={{
          color: secondColor,
        }}>
        {`${item.Name} ${item.Qty ? ` (${item.Qty})` : ''}`}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
