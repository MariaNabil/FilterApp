import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {smallPadding} from '../../../../constants/styles';
import {
  secondColor,
  selectedColor,
  thirdColor,
} from '../../../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 7,
        borderColor: thirdColor,
        borderWidth: item.isSelected ? 0 : 1,
        marginTop: smallPadding,
        alignItems: 'center',
        backgroundColor: item.isSelected ? selectedColor : null,
      }}>
      {item.isSelected ? (
        <AntDesign
          name={'check'}
          size={15}
          style={{paddingEnd: 5}}
          color={secondColor}
        />
      ) : null}

      <Text
        style={{
          color: secondColor,
        }}>
        {item.Name}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
