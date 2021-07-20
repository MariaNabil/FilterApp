import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {secondColor} from '../../../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Item = props => {
  const {
    item: {item},
    onSelectFilter,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onSelectFilter(props.Id, item.Id)}
      style={styles.root(item.isSelected)}>
      {item.isSelected ? (
        <AntDesign
          name={'check'}
          size={15}
          style={styles.icon}
          color={secondColor}
        />
      ) : null}

      <Text style={styles.filter}>{item.Name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
