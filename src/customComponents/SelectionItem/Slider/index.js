import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {secondColor, thirdColor} from '../../../constants/Colors';
import {largePadding} from '../../../constants/styles';
import styles from './styles';

const SliderItem = props => {
  const {
    Max = 100,
    isSingle = true,
    Start = 0,
    End = 0,
    onChangeSlider,
    Id,
  } = props;
  const renderRightMarker = () => <View style={styles.marker} />;

  const renderLeftMarker = () =>
    !isSingle ? <View style={styles.marker} /> : null;

  return (
    <View>
      <View style={styles.firstRow(isSingle)}>
        <MultiSlider
          values={[Start, End]}
          onValuesChange={values => {
            onChangeSlider(Id, values[1], values[0]);
          }}
          min={0}
          max={Max}
          step={1}
          enabledOne={isSingle ? false : true}
          trackStyle={{
            height: 3,
            width: 100,
          }}
          style={{width: 100}}
          touchDimensions={{
            height: 100,
            width: 100,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
          selectedStyle={{
            backgroundColor: secondColor,
          }}
          unselectedStyle={{
            backgroundColor: thirdColor,
          }}
          sliderLength={
            isSingle
              ? Dimensions.get('window').width * 0.65
              : Dimensions.get('window').width - largePadding * 3
          }
          isMarkersSeparated={true}
          customMarkerLeft={renderLeftMarker}
          customMarkerRight={renderRightMarker}
          allowOverlap={true}
          markerOffsetX={isSingle ? 10 : 0}
        />
        {isSingle ? <Text style={styles.fromToValue}>{End}</Text> : null}
      </View>
      {isSingle == false ? (
        <View style={styles.rowStyle}>
          <Text style={styles.fromToValue}>{Start}</Text>
          <Text style={styles.fromToValue}>{End}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SliderItem;
