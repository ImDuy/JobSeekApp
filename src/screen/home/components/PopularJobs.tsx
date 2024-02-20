import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {Params, fetchJobs} from '../../../api/RapidApi';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DetailStackProps} from '../../navigation/Type';
import {PAGE} from '../../../common/Const';

export default function PopularJobs() {
  const navigation = useNavigation<DetailStackProps>();

  const params: Params = {
    query: 'Python',
    page: '1',
    num_pages: '1',
  };

  const [dataApi, setDataApi] = useState([]);
  const popularJobsList: any = [
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      employer_name: 'Alphident Technology Inc.',
      job_title: 'Senior NodeJS/React at US Company with high benefits',
      job_country: 'US',
    },
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      employer_name: 'Upwork Company',
      job_title: 'Senior NodeJS/React',
      job_country: 'Findland',
    },
    {
      employer_logo: require('../../../assets/images/avatar.jpeg'),
      employer_name: 'Highland coffee',
      job_title: 'Senior NodeJS/React',
      job_country: 'VietNam',
    },
  ];
  // useEffect to avoid re-implement a function every time the function component is re-rendered by useState
  // first parameter is a function that will be re-implemented if the second parameter is changed
  useEffect(() => {
    fetchJobs(params).then(res => {
      setDataApi(res);
    });
    // setDataApi(popularJobsList);
  }, []); // here the second parameter is an empty array which will be constant => first parameter is implemented only once after the UI of function compenent is rendered the first time

  const onPressItem = (item: any) => {
    navigation.push(PAGE.DETAIL, item);
  };

  const renderItem = (item: any) => (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={style.containerItemPopular}>
      <View style={[style.btnSearch, style.bgLightGray]}>
        <Image source={{uri: item.employer_logo}} style={style.iconMenu} />
      </View>
      <Text
        numberOfLines={1}
        style={[style.titleItemPopular, style.colorGray, style.mt8]}>
        {item.employer_name}
      </Text>
      <Text numberOfLines={1} style={style.mainTitleItemPopular}>
        {item.job_title}
      </Text>
      <Text numberOfLines={1} style={style.colorGray}>
        {item.job_country}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={style.mt16}>
      {/* Title */}
      <View style={[style.rowDir, style.containerTitlePopular, style.mt8]}>
        <Text style={style.titlePopular}>Popular Jobs</Text>
        <Text>Show all</Text>
      </View>
      {/* Popular Jobs List */}
      <FlatList
        style={{marginTop: 10}}
        horizontal
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => <View style={{width: 30}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
