import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {checkboxColor, secondColor} from '../../../../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Item = props => {
  const {
    item: {item},
    onSelectFilter,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onSelectFilter(props.Id, item.Id)}
      style={styles.root}>
      {item.isSelected ? (
        <MaterialCommunityIcons
          name={'checkbox-marked'}
          size={20}
          style={styles.icon}
          color={secondColor}
        />
      ) : (
        <MaterialCommunityIcons
          name={'checkbox-blank-outline'}
          size={20}
          style={styles.icon}
          color={checkboxColor}
        />
      )}

      <Text style={styles.filter}>
        {`${item.Name} ${item.Qty ? ` (${item.Qty})` : ''}`}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
