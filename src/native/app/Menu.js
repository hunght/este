import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { signOut } from '../../common/auth/actions';
// const DefaultAvatar ;
type MenuProps = {
  viewer?: User
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'ScreenHome' };
  }

  clickMenuItem(item, user) {
    this.setState({ currentScreen: item });
    this.props.navigation.navigate(item, { user });
  }

  render() {
    const { container, title, menuIcon, avatar, menuItem, menuItemActive, textMenu } = style;
    const { currentScreen } = this.state;
    // const { fbid } = this.props.loginReducer.user
    // const Avatar =
    //   typeof fbid === 'undefined' || fbid.length === 0
    //   ? DefaultAvatar : {uri: this.props.loginReducer.user.fbid } ;
    return (
      <View style={container}>
        <View>
          <Text style={title}>App Name</Text>

          <TouchableOpacity
            onPress={() => this.clickMenuItem('ScreenHome')}
            style={currentScreen === 'ScreenHome' ? menuItemActive : menuItem}
          >
            {/* <Image style={menuIcon} source={IconHome} /> */}
            <Text style={textMenu}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.clickMenuItem('TodosPage')}
            style={currentScreen === 'TodosPage' ? menuItemActive : menuItem}
          >
            {/* <Image style={menuIcon} source={IconHome} /> */}
            <Text style={textMenu}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.clickMenuItem('OfflinePage')}
            style={currentScreen === 'OfflinePage' ? menuItemActive : menuItem}
          >
            {/* <Image style={menuIcon} source={IconHome} /> */}
            <Text style={textMenu}>Offline</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.clickMenuItem('LanguageScreen')}
            style={currentScreen === 'LanguageScreen' ? menuItemActive : menuItem}
          >
            {/* <Image style={menuIcon} source={IconList} /> */}
            <Text style={textMenu}>Languages</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.props.signOut()} style={menuItem}>
            {/* <Image style={menuIcon} source={IconLogout} /> */}
            <Text style={textMenu}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.clickMenuItem('ScreenProfile', { name: 'Profile' })}
            style={currentScreen === 'ScreenProfile' ? menuItemActive : menuItem}
          >
            {/* <Image style={avatar} source={Avatar} /> */}
            <Text style={textMenu}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MAIN_COLOR = '#3498db';
const ACTIVE_COLOR = '#2980b9';
style = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  menuItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemActive: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ACTIVE_COLOR
  },
  avatar: {
    marginRight: 5,
    borderRadius: 20
  },
  menuIcon: {
    marginRight: 5
  },
  textMenu: {
    fontWeight: '500',
    color: 'white'
  }
});

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    signOut: () => dispatch(signOut()())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
