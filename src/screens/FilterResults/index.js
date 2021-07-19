import {FlatList, StatusBar, View} from 'react-native';
import React from 'react';
import {mainColor} from '../../constants/Colors';
import FiltersData from '../../constants/FiltersData';
import {largePadding} from '../../constants/styles';
import ItemSeparator from '../../customComponents/ItemSeparator';
import Header from '../../customComponents/Header';
import FilterSectionItem from './FilterSectionItem';

const FilterResults = () => {
  const renderFilterSections = () => {
    return (
      <FlatList
        data={FiltersData}
        keyExtractor={(item, index) => `${index}`}
        renderItem={item => <FilterSectionItem item={item} />}
        style={{paddingHorizontal: largePadding}}
        ItemSeparatorComponent={() => <ItemSeparator />}></FlatList>
    );
  };

  return (
    <View style={{backgroundColor: mainColor, flex: 1}}>
      <StatusBar backgroundColor={mainColor} translucent={false} />
      <Header />
      {renderFilterSections()}
    </View>
  );
};

export default FilterResults;
