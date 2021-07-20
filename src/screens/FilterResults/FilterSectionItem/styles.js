import {StyleSheet} from 'react-native';
import {secondColor} from '../../../constants/Colors';
import {mediumFontSize, smallPadding} from '../../../constants/styles';

export default StyleSheet.create({
  root: {
    paddingVertical: smallPadding,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionName: {color: secondColor, fontSize: mediumFontSize},
});
