import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {style} from './Style';
import Content from './components/Content';
import BottomApplyBtn from './components/BottomApplyBtn';
import {useRoute} from '@react-navigation/native';
import {DetailRouteProps} from '../navigation/Type';

export default function DetailPage() {
  const params = useRoute<DetailRouteProps>().params;

  return (
    <SafeAreaView>
      {/* SafeAreaView ignore padding so we need a view container inside to set padding for whole screen*/}
      <View style={style.container}>
        <Header
          logoUrl={params.employer_logo}
          jobTitle={params.job_title}
          publisher={params.job_publisher}
          location={params.job_country}
        />
        <Content content={params.job_highlights} />
        <BottomApplyBtn />
      </View>
    </SafeAreaView>
  );
}
