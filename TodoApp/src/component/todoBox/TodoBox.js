import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constant/theme/Theme';
import RoundedCheckbox from 'react-native-rounded-checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoBox(props) {
  const renderIcon = () => {
    return <Icon name="check" size={20} color="#000" />;
  };
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.checkBox}>
          <RoundedCheckbox
            innerSize={28}
            outerSize={30}
            text={false}
            component={renderIcon()}
          />
        </View>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text1}>
          {props.todo}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('8%'),
    borderRadius: 20,
    marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),

    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.75,
    shadowRadius: 1,

    elevation: 3,

    backgroundColor: COLORS.purple,
  },
  text1: {
    fontSize: wp('4%'),
    width: wp('70%'),
    color: COLORS.text,
  },
  checkBox: {
    marginHorizontal: wp('2.5%'),
  },
});
