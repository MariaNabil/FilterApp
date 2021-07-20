import {StyleSheet} from 'react-native';
import {secondColor} from '../../../../constants/Colors';
import {smallPadding} from '../../../../constants/styles';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: smallPadding,
    paddingVertical: 7,
    alignItems: 'center',
  },
  icon: {paddingEnd: smallPadding},
  filter: {color: secondColor},
});
