import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {secondColor} from '../../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectionItem from '../../../customComponents/SelectionItem';
import styles from './styles';

const FilterSectionItem = props => {
  const {item, toggleSection, onSelectFilter, onToggleSwitch, onChangeSlider} =
    props;
  const {Id, Name, isOpen} = item;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.rowStyle}
        onPress={() => toggleSection(Id)}>
        <Text style={styles.sectionName}>{Name}</Text>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={25}
          color={secondColor}
        />
      </TouchableOpacity>
      {isOpen ? (
        <SelectionItem
          {...item}
          onSelectFilter={onSelectFilter}
          onToggleSwitch={onToggleSwitch}
          onChangeSlider={onChangeSlider}
        />
      ) : null}
    </View>
  );
};

export default FilterSectionItem;
