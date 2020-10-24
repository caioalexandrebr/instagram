import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import camera from './assets/camera.png';
import Feed from './pages/Feed';
import logo from './assets/instagram.png';
import send from './assets/send.png';
import igtv from './assets/igtv.png';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      headerTitleAlign: 'center',
      defaultNavigationOptions: {
        headerTitle: () => <Image source={logo} />,
        headerLeft: () => (
          <TouchableOpacity style={{marginLeft: 15}}>
            <Image source={camera} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 15}}>
              <Image source={igtv} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 15}}>
              <Image source={send} />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
