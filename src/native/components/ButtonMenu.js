import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';

export default class ButtonMenu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
        <Icon name="ios-menu" size={30} color="#4F8EF7" style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    );
  }
}
