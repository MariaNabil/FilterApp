import {StyleSheet} from 'react-native';
import {mainColor, secondColor} from '../../constants/Colors';
import {largePadding, smallPadding} from '../../constants/styles';

export default StyleSheet.create({
  flatList: {paddingHorizontal: largePadding},
  showItemsButton: {
    borderRadius: 20,
    borderColor: secondColor,
    borderWidth: 2,
    paddingHorizontal: smallPadding,
    paddingVertical: smallPadding,
    alignItems: 'center',
    marginVertical: largePadding,
    marginHorizontal: largePadding,
  },
  showItemsButtonLabel: {
    color: secondColor,
    fontSize: 15,
    fontWeight: 'bold',
  },
  root: {backgroundColor: mainColor, flex: 1},
});
