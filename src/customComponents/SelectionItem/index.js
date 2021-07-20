import React from 'react';
import Checkbox from './Checkbox';
import MultiSelector from './MultiSelector';
import SliderItem from './Slider';
import SwitchItem from './Switch';

const SelectionItem = props => {
  const {Type} = props;
  if (Type == 'multiSelector') {
    return <MultiSelector {...props} />;
  } else if (Type == 'checkbox') {
    return <Checkbox {...props} />;
  } else if (Type == 'switch') {
    return <SwitchItem {...props} />;
  } else if (Type == 'slider') {
    return <SliderItem {...props} />;
  } else if (Type == 'doubleSlider') {
    return <SliderItem {...props} isSingle={false} />;
  } else return null;
};

export default SelectionItem;
