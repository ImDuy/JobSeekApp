import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';

export default function BottomApplyBtn() {
  const iconHeart = require('../../../assets/icons/heart.png');
  return (
    <View style={style.bottomContainer}>
      <TouchableOpacity style={style.heartBtn}>
        <Image source={iconHeart} style={style.heartIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.applyBtn}>
        <Text style={style.applyText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
}
