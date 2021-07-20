import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {mainColor, secondColor} from '../../constants/Colors';
import FiltersData from '../../constants/FiltersData';
import {largePadding, smallPadding} from '../../constants/styles';
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

  const getSelectedItems = items => {
    let SelectedItems = '';
    for (let i = 0; i < items?.length; i++) {
      let item = items[i];
      if (item.Type == 'multiSelector' || item.Type == 'checkbox') {
        item.Items.map(i => {
          if (i.isSelected) SelectedItems += i.Name + '\n';
        });
      } else if (item.Type == 'switch') {
        if (item.isSelected) SelectedItems += item.Name + '\n';
      } else if (item.Type == 'slider' || item.Type == 'doubleSlider')
        if (
          item.Start !== undefined &&
          item.Start !== null &&
          item.Start !== item.End
        )
          SelectedItems +=
            item.Name + ' from ' + item.Start + ' To ' + item.End + '\n';
    }
    return SelectedItems;
  };

  const ShowAlert = () => {
    Alert.alert('Selected Items', getSelectedItems(newFiltersData));
  };

  const renderShowSelectedItemsButton = () => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 20,
          borderColor: secondColor,
          borderWidth: 2,
          paddingHorizontal: smallPadding,
          paddingVertical: smallPadding,
          alignItems: 'center',
          marginVertical: largePadding,
          marginHorizontal: largePadding,
        }}
        onPress={ShowAlert}>
        <Text
          style={{
            color: secondColor,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {'Show Selected Items'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: mainColor, flex: 1}}>
      <Header />
      <ScrollView>
        {renderFilterSections()}
        {renderShowSelectedItemsButton()}
      </ScrollView>
    </View>
  );
};

export default FilterResults;
