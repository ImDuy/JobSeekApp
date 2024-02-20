import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {Params, fetchJobs} from '../../../api/RapidApi';
import {useNavigation} from '@react-navigation/native';
import {DetailStackProps} from '../../navigation/Type';
import {PAGE} from '../../../common/Const';

export default function NearbyJobs() {
  const navigation = useNavigation<DetailStackProps>();

  const params: Params = {
    query: 'react',
    page: '1',
    num_pages: '1',
  };

  const [dataApi, setDataApi] = useState();
  const nearbyJobs: any = [
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      job_title: 'Java Developer',
      job_employment_type: 'Contractor',
    },
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      job_title: 'React Developer',
      job_employment_type: 'Contractor',
    },
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      job_title: 'React Developer - Must be US citizen',
      job_employment_type: 'Fulltime',
    },
  ];
  // useEffect to avoid re-implement a function every time the function component is re-rendered by useState
  // first parameter is a function that will be re-implemented if the second parameter is changed
  // (here the second parameter is an empty array which will be constant => first parameter is implemented only once after the UI of function compenent is rendered the first time)
  useEffect(() => {
    fetchJobs(params).then(res => {
      setDataApi(res);
    });
    // setDataApi(nearbyJobs);
  }, []);

  const onPressItem = (item: any) => {
    navigation.push(PAGE.DETAIL, item);
  };
  const renderItem = (item: any) => (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={style.containerItemNearby}>
      {/* Image */}
      <View style={[style.btnSearch, style.bgLightGray]}>
        <Image source={{uri: item.employer_logo}} style={style.iconMenu} />
      </View>
      {/* Job title + type */}
      <View>
        <Text style={style.titleItemNearby}>{item.job_title}</Text>
        <Text style={[style.typeItemNearby, style.colorGray]}>
          {item.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={style.mt16}>
      {/* Title */}
      <View style={[style.rowDir, style.containerTitlePopular, style.mt8]}>
        <Text style={style.titlePopular}>Nearby Jobs</Text>
        <Text>Show all</Text>
      </View>
      {/* Nearby Jobs List */}

      <FlatList
        style={{marginTop: 10}}
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
