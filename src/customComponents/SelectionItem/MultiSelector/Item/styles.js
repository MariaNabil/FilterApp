import {StyleSheet} from 'react-native';
import {
  secondColor,
  selectedColor,
  thirdColor,
} from '../../../../constants/Colors';
import {smallPadding} from '../../../../constants/styles';

export default StyleSheet.create({
  root: isSelected => ({
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 7,
    borderColor: thirdColor,
    borderWidth: isSelected ? 0 : 1,
    marginTop: smallPadding,
    alignItems: 'center',
    backgroundColor: isSelected ? selectedColor : null,
  }),
  icon: {paddingEnd: 5},
  filter: {color: secondColor},
});
