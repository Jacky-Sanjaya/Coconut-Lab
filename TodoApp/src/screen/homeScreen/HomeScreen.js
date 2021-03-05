import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import COLORS from '../../constant/theme/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CategoriesBox from '../../component/categoriesBox/CategoriesBox';
import Modal from '../../component/modal/Modal1';
import TodoBox from '../../component/todoBox/TodoBox';
import AddTodo from '../../component/addTodo/AddTodo';

export default function HomeScreen({navigation, props}) {
  const [modal, setModal] = useState(false);
  const [todo, setTodo] = useState('');

  const modalHandler = () => {
    setModal(!modal);
  };
  console.log(`ttessssss`, todo);
  const getTodo = async () => {
    await AsyncStorage.getItem('list')
      .then((item) => {
        JSON.parse(item), setTodo(item);
      })
      .catch((e) => {
        throw e;
      });
  };
  useEffect(() => {
    getTodo();
  }, [getTodo()]);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: hp('7.5%'),
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => console.log(`category` + category)}
          style={styles.menu}>
          <Icon name="menu" color={COLORS.blue1} size={35} />
        </TouchableOpacity>
        <Searchbar style={{width: wp('85%')}} />
      </View>
    );
  }

  function renderTodo() {
    const renderItem = (item) => {
      console.log(`ini item`, item);
      return <TodoBox todo={item.todo} />;
    };
    return (
      <FlatList
        data={todo.item}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }

  function renderUserName() {
    return <Text style={styles.userName}>What's up, Jacky!</Text>;
  }
  function renderMain() {
    return (
      <View>
        <Text style={styles.text1}>CATEGORIES</Text>
        <CategoriesBox />
        <Text style={styles.text2}>YOUR TASK</Text>
        {renderTodo()}
      </View>
    );
  }
  function renderAdd() {
    return (
      <View>
        <AddTodo press={() => modalHandler()} />
        <Modal
          visible={modal}
          close={modalHandler}
          onBackdropPress={() => setModal(false)}
          category={(value) => setCategory(value)}
          press={() => {
            setModal(false);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderUserName()}
        {renderMain()}
      </ScrollView>
      {renderAdd()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue2,
  },
  menu: {
    height: '100%',
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  userName: {
    fontSize: wp('8%'),
    margin: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  text1: {
    paddingHorizontal: wp('5%'),
    marginVertical: hp('1.5%'),
    fontSize: wp('3.5%'),
    fontWeight: '700',
    color: COLORS.blue1,
  },
  text2: {
    paddingHorizontal: wp('5%'),
    marginVertical: hp('3%'),
    fontSize: wp('3.5%'),
    fontWeight: '700',
    color: COLORS.blue1,
  },
});
