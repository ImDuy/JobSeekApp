import {View, Text} from 'react-native';
import React from 'react';
import ToolBar from './components/ToolBar';
import SearchUI from './components/SearchUI';
import {style} from './Style';
import PopularJobs from './components/PopularJobs';
import NearbyJobs from './components/NearbyJobs';

export default function HomePage() {
  return (
    <View style={style.container}>
      <ToolBar />
      <SearchUI />
      <PopularJobs />
      <NearbyJobs />
    </View>
  );
}
