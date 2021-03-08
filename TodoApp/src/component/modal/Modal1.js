import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import DropDown from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import COLORS from '../../constant/theme/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTodo from '../addTodo/AddTodo';
import {add} from 'react-native-reanimated';

export default function Modal1(props) {
  const [todo, setTodo] = useState('');
  const [category, setCategory] = useState('');
  const [finish, setFinish] = useState(false);
  const [slider, setSlider] = useState(0);

  const addTodo = async () => {
    let todos = await AsyncStorage.getItem('list')
      .then((item) => JSON.parse(item))
      .catch((e) => {
        throw e;
      });
    console.log('test', todos);
    let item = {
      todo: todo,
      category: category,
      finish: finish,
      key: uuid.v4(),
    };
    if (todos == null) {
      todos = [];
    } else if (todo !== '' && category !== '') todos.push(item);

    await AsyncStorage.setItem('list', JSON.stringify(todos));
    console.log(`ini todos`, todos);
    setTodo('');
    setCategory('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Modal onBackdropPress={props.onBackdropPress} isVisible={props.visible}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.dropDown}>
            <DropDown
              items={[
                {label: 'Do now', value: 'now'},
                {label: 'Do tomorrow', value: 'tomorrow'},
                {label: 'Do soon', value: 'soon'},
                {label: 'Do when you get some extra time', value: 'extra'},
              ]}
              style={{
                backgroundColor: COLORS.blue2,
                borderColor: '#749DD2',
              }}
              onOpen={() => setSlider(17.5)}
              onClose={() => setSlider(0)}
              dropDownStyle={{backgroundColor: COLORS.blue2}}
              activeLabelStyle={{
                color: COLORS.purple,
              }}
              defaultNull
              labelStyle={{
                fontSize: 15,
                color: '#C2CDDB',
              }}
              placeholder="Category"
              containerStyle={{height: hp(6), width: wp(80), borderRadius: 100}}
              onChangeItem={(item) => setCategory(item.value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              numberOfLines={33}
              style={{
                marginTop: hp(slider),
                borderRadius: 20,
                padding: wp(5),
                alignItems: 'flex-start',
                textAlign: 'left',
                textAlignVertical: 'top',
              }}
              onChangeText={(e) => setTodo(e)}
              value={todo}
              placeholder="Todo"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              addTodo();
              props.press;
            }}
            style={styles.button}>
            <Text>Add</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: COLORS.blue1,
  },
  inputContainer: {
    marginHorizontal: wp(2),
    marginTop: hp(2),
    height: hp(72.5),
  },
  input: {},
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(25),
    height: hp(5),
    borderRadius: 5,
    backgroundColor: COLORS.blue2,
  },
  dropDown: {
    marginTop: hp(5),
    alignItems: 'center',
  },
});
