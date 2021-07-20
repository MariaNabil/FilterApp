import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {mainColor} from '../../constants/Colors';
import FiltersData from '../../constants/FiltersData';
import {largePadding} from '../../constants/styles';
import ItemSeparator from '../../customComponents/ItemSeparator';
import Header from '../../customComponents/Header';
import FilterSectionItem from './FilterSectionItem';

const FilterResults = () => {
  const [newFiltersData, setNewFiltersData] = useState(
    FiltersData.map(item => {
      return {
        ...item,
        isOpen: false,
      };
    }),
  );

  const toggleSection = SelectedItemId => {
    setNewFiltersData(
      newFiltersData.map(item => {
        return {
          ...item,
          isOpen: item.Id == SelectedItemId ? !item.isOpen : item.isOpen,
        };
      }),
    );
  };

  const onSelectFilter = (sectionId, filterId) => {
    setNewFiltersData(
      newFiltersData.map(item => {
        if (item.Id == sectionId) {
          return {
            ...item,
            Items: item.Items?.map(filterItem => ({
              ...filterItem,
              isSelected:
                filterItem.Id == filterId
                  ? !!!filterItem.isSelected
                  : !!filterItem.isSelected,
            })),
          };
        } else {
          return {
            ...item,
          };
        }
      }),
    );
  };

  const onToggleSwitch = sectionId => {
    setNewFiltersData(
      newFiltersData.map(item => {
        if (item.Id == sectionId) {
          return {
            ...item,
            isSelected: !!!item.isSelected,
          };
        } else {
          return {
            ...item,
          };
        }
      }),
    );
  };

  const onChangeSlider = (sectionId, End = 0, Start = 0) => {
    setNewFiltersData(
      newFiltersData.map(item => {
        if (item.Id == sectionId) {
          return {
            ...item,
            End: End,
            Start: Start,
          };
        } else {
          return {
            ...item,
          };
        }
      }),
    );
  };

  const renderFilterSections = () => {
    return (
      <FlatList
        data={newFiltersData}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <FilterSectionItem
            item={item}
            toggleSection={toggleSection}
            onSelectFilter={onSelectFilter}
            onToggleSwitch={onToggleSwitch}
            onChangeSlider={onChangeSlider}
          />
        )}
        style={{paddingHorizontal: largePadding}}
        ItemSeparatorComponent={() => <ItemSeparator />}></FlatList>
    );
  };

  return (
    <View style={{backgroundColor: mainColor, flex: 1}}>
      <Header />
      {renderFilterSections()}
    </View>
  );
};

export default FilterResults;
