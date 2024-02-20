import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {style} from '../Style';

type propsParam = {
  content?: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
};

enum TAB {
  DESC = 'Qualifications',
  COMPANY = 'Responsibilities',
  REVIEWS = 'Benefits',
}
export default function Content(props: propsParam) {
  const [tabSelected, setTabSelected] = useState(TAB.DESC); // tabSelected is not functionally required to be state variable but it need to be state variable to avoid being reset to initial value every rerendering
  const [contentData, setContentData] = useState(
    props.content?.Qualifications ?? [],
  );
  const onPress = (pressedBtn: TAB) => {
    setTabSelected(pressedBtn);
    // tabSelected (state variable) not get updated immediately after setState -> use passed in parameter to setContentData
    if (pressedBtn == TAB.DESC) {
      setContentData(props.content?.Qualifications ?? []);
    } else if (pressedBtn == TAB.COMPANY) {
      setContentData(props.content?.Responsibilities ?? []);
    } else if (pressedBtn == TAB.REVIEWS) {
      setContentData(props.content?.Benefits ?? []);
    }
  };
  const renderContent = () => contentData.map(text => <Text>{text}</Text>);

  return (
    <View style={style.mt8}>
      {/* Content Type Buttons */}
      <View style={style.contentTypeContainer}>
        <TouchableOpacity
          style={[
            style.contentTypeBtn,
            (tabSelected as TAB) == TAB.DESC ? style.btnSelected : null,
          ]}
          onPress={() => onPress(TAB.DESC)}>
          <Text
            style={[
              style.colorGray,
              (tabSelected as TAB) == TAB.DESC ? style.textSelected : null,
            ]}>
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.contentTypeBtn,
            (tabSelected as TAB) == TAB.COMPANY ? style.btnSelected : null,
          ]}
          onPress={() => onPress(TAB.COMPANY)}>
          <Text
            style={[
              style.colorGray,
              (tabSelected as TAB) == TAB.COMPANY ? style.textSelected : null,
            ]}>
            Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.contentTypeBtn,
            (tabSelected as TAB) == TAB.REVIEWS ? style.btnSelected : null,
          ]}
          onPress={() => onPress(TAB.REVIEWS)}>
          <Text
            style={[
              style.colorGray,
              (tabSelected as TAB) == TAB.REVIEWS ? style.textSelected : null,
            ]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={style.mt16}>
        <View style={style.contentItemContainer} key={0}>
          <Text style={[style.itemTitle, style.mb16]}>{tabSelected}</Text>
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  );
}
