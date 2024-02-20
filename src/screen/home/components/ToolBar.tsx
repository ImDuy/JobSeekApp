import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';

export default function ToolBar() {
  //'require' is commonly used to import local assets such as images, fonts, and other resources that are bundled with the app.
  const iconMenu = require('../../../assets/icons/menu.png');
  const avatar = require('../../../assets/images/avatar.jpeg');
  return (
    <View style={style.containerToolBar}>
      <View style={style.toolbar}>
        <Image source={iconMenu} style={style.iconMenu} />
        <Image source={avatar} style={style.avatar} />
      </View>

      <Text style={[style.subTitle, style.mt16]}>Hello Adrian</Text>
      <Text style={style.title}>Find your perfect job</Text>
    </View>
  );
}
