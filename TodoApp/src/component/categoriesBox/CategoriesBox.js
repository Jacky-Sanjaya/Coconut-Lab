import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constant/theme/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CategoriesBox() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text>40 Task</Text>
        <Text style={styles.text1}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('42.5%'),
    height: hp('15%'),
    borderRadius: 20,
    marginLeft: wp('5%'),
    marginTop: wp('5%'),
    paddingHorizontal: 12.5,
    paddingTop: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,

    backgroundColor: COLORS.purple,
  },

  text1: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#ffff',
  },
});
