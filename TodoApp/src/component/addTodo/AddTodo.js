import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constant/theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AddTodo(props) {
  return (
    <TouchableOpacity onPress={props.press} style={styles.container}>
      <Icon style={styles.icon} name="plus" size={40} color={COLORS.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('15%'),
    height: hp('7.5%'),
    borderRadius: wp('7%'),
    position: 'absolute',
    right: wp('4.75%'),
    bottom: 10,
    backgroundColor: COLORS.pink,

    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.0,

    elevation: 3,
  },
  icon: {
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.0,

    elevation: 20,
  },
});
