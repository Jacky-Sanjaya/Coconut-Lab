import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Text, Avatar} from 'react-native-paper';
import COLORS from '../../constant/theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <TouchableOpacity style={styles.profileContainer}>
            <Avatar.Image source={require('../../menma.jpg')} size={50} />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {
            null;
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  profileContainer: {
    width: wp('25%'),
    height: hp('10%'),
  },
});
