import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';

const Checkbox = props => {
  const {Items, Type} = props;
  return (
    <FlatList
      data={Items}
      keyExtractor={(item, index) => `${index}`}
      renderItem={item => <Item item={{Type: Type, ...item}} {...props} />}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}></FlatList>
  );
};

export default Checkbox;
