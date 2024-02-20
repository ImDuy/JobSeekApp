import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../Style';
import {useNavigation} from '@react-navigation/native';
import {DetailStackProps} from '../../navigation/Type';

type propsParam = {
  logoUrl?: string;
  jobTitle?: string;
  publisher?: string;
  location?: string;
};

export default function Header(props: propsParam) {
  const navigation = useNavigation<DetailStackProps>();

  const iconBack = require('../../../assets/icons/back.png');
  const iconShare = require('../../../assets/icons/share.png');
  const iconLocation = require('../../../assets/icons/location.png');
  const avatar = require('../../../assets/images/avatar.jpeg');

  const onBack = () => {
    navigation.pop();
  };
  return (
    <View>
      {/* Toolbar */}
      <View style={style.toolbarContainer}>
        <TouchableOpacity style={style.btn} onPress={onBack}>
          <Image source={iconBack} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Image source={iconShare} style={style.icon} />
        </TouchableOpacity>
      </View>

      {/* Company Profile */}
      <View style={[style.profileContainer, style.mt16]}>
        <Image
          source={
            typeof props.logoUrl != 'string' ? avatar : {uri: props.logoUrl}
          }
          style={style.companyLogo}
        />
        <Text style={[style.jobTitle, style.secondaryColor, style.mt8]}>
          {props.jobTitle ?? 'Unknown Job'}
        </Text>
        <View style={[style.rowDir, style.mt8]}>
          <Text style={[style.fontSemiBold, style.secondaryColor]}>
            {props.publisher ?? 'Unknown Publisher'} /
          </Text>
          <Image source={iconLocation} style={style.icon20} />
          <Text style={style.secondaryColor}>
            {props.location ?? 'Unknown Location'}
          </Text>
        </View>
      </View>
    </View>
  );
}
