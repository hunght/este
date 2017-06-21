import React, { Component } from 'react';
import {
  TouchableOpacity, Image
} from 'react-native';

export default class ButtonMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate('DrawerOpen')}
      >
        <Image
            style={{marginLeft: 10}}
            // source={require('../images/icon_menu.png')}
        />
      </TouchableOpacity>
    );
  }
}
