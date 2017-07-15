import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, DrawerItems } from 'react-navigation';
import ButtonMenu from '../components/ButtonMenu';
import Menu from './Menu';

// Pages
import HomePage from '../home/HomePage';
import IntlPage from '../intl/IntlPage';
import MePage from '../me/MePage';
import OfflinePage from '../offline/OfflinePage';
import SignInPage from '../auth/SignInPage';
import TodosPage from '../todos/TodosPage';

const MAIN_COLOR = '#3498db';

export const HomeStack = StackNavigator({
  ScreenHome: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>Home</Text>,
    }),
  },
  TodosPage: {
    screen: TodosPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>Todos</Text>,
    }),
  },
  OfflinePage: {
    screen: OfflinePage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>Offline</Text>,
    }),
  },
  LanguageScreen: {
    screen: IntlPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: <Text style={style.headerHomeText}>Languages</Text>,
    }),
  },
  ScreenProfile: {
    screen: MePage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <ButtonMenu navigation={navigation} />,
      title: (
        <Text style={style.headerHomeText}>
          {navigation.state.params.user.name}
        </Text>
      ),
    }),
  },
});

export const SlideMenu = DrawerNavigator(
  {
    screen: {
      screen: HomeStack,
    },
  },
  {
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />,
  },
);

const style = StyleSheet.create({
  headerHomeText: {
    color: MAIN_COLOR,
  },
});
