import {Dimensions, StyleSheet} from 'react-native';
import {mainColor, secondColor, thirdColor} from '../../../constants/Colors';

export default StyleSheet.create({
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: secondColor,
    backgroundColor: mainColor,
    alignSelf: 'center',
  },
  firstRow: isSingle => ({
    flexDirection: 'row',
    justifyContent: isSingle ? 'space-between' : 'center',
    alignItems: 'center',
  }),
  fromToValue: {
    color: secondColor,
    borderWidth: 1,
    borderColor: thirdColor,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 7,
    width: Dimensions.get('window').width * 0.15,
    textAlign: 'center',
  },
  rowStyle: {flexDirection: 'row', justifyContent: 'space-between'},
});
