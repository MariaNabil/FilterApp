import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {secondColor} from '../../../constants/Colors';
import {mediumFontSize, smallPadding} from '../../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilterSelections from '../FilterSelections';
import SelectionItem from '../../../customComponents/SelectionItem';

const FilterSectionItem = props => {
  const {item, toggleSection, onSelectFilter, onToggleSwitch, onChangeSlider} =
    props;
  const {Id, Name, isOpen} = item;

  return (
    <View
      style={{
        paddingVertical: smallPadding,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => toggleSection(Id)}>
        <Text style={{color: secondColor, fontSize: mediumFontSize}}>
          {Name}
        </Text>
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
