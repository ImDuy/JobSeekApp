import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {style} from '../Style';

export default function SearchUI() {
  console.log('rendering');
  const iconSearch = require('../../../assets/icons/search.png');
  const filterBtnList = [
    {
      title: 'Full-time',
      isSelected: true,
    },
    {
      title: 'Part-time',
      isSelected: false,
    },
    {
      title: 'Contractor',
      isSelected: false,
    },
  ];
  const [filterBtn, setFilterBtn] = useState(filterBtnList);

  const onFilterBtnPress = (selectedIdx: number) => {
    // need to create a new array based on map function to create new array reference (setState only rerender a component with different array ref passed in)
    const newList = filterBtnList.map((item, idx) => {
      if (idx == selectedIdx) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setFilterBtn(newList);
    // filterBtn.forEach((item, idx) => console.log(idx, item.isSelected));
  };
  // can only declare arrow function in function (cannot declare normal function in function)
  const renderRadioBtn = () =>
    filterBtn.map((item, idx) => (
      <TouchableOpacity
        key={idx}
        style={[style.radioBtn, item.isSelected ? style.btnSelected : null]}
        onPress={() => onFilterBtnPress(idx)}>
        <Text
          style={[style.colorGray, item.isSelected ? style.btnSelected : null]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    ));

  return (
    <View>
      {/*Search*/}
      <View style={[style.containerSearch, style.rowDir]}>
        <TextInput
          style={style.input}
          placeholder="What are you looking for?"
        />
        <TouchableOpacity style={style.btnSearch}>
          <Image style={style.iconSearch} source={iconSearch} />
        </TouchableOpacity>
      </View>
      {/*Filter*/}
      <View style={[style.rowDir, style.containerFilter]}>
        {renderRadioBtn()}
      </View>
    </View>
  );
}
