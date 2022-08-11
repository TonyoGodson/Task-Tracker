// import React, { Component } from 'react';
// import { Dropdown } from 'react-native-material-dropdown';

// class Example extends Component {
//   render() {
//     let data = [{
//       value: 'Banana',
//     }, {
//       value: 'Mango',
//     }, {
//       value: 'Pear',
//     }];

//     return (
//       <Dropdown
//         label='Favorite Fruit'
//         data={data}
//       />
//     );
//   }
// }

// export default Example;

import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { Component, useState } from "react";

const Pickers = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Picker
        style={{
          width: 150,
          position: "relative",
          top: -80,
          left: 50,
          fontSize: 5,
        }}
        mode={"dropdown"}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item
          label="Does not repeat"
          value="0"
          style={{ width: 2 }}
        ></Picker.Item>
        <Picker.Item style={{ width: 2 }} label="Daily" value="1"></Picker.Item>
        <Picker.Item
          style={{ width: 2 }}
          label="Weeklyon Tuesday"
          value="2"
        ></Picker.Item>
        <Picker.Item
          style={{ width: 2, backgroundColor: "#ff0000" }}
          label="Monthly on the last Tuesday"
          value="3"
        ></Picker.Item>
        <Picker.Item
          style={{ width: 2 }}
          label="Monthly on the firstTuesday"
          value="4"
        ></Picker.Item>
        <Picker.Item
          style={{ width: 2 }}
          label="Annually on July 26"
          value="5"
        ></Picker.Item>
        <Picker.Item
          style={{ width: 2 }}
          label="Every week day (Monday to Friday"
          value="6"
        ></Picker.Item>
        <Picker.Item
          style={{ width: 2 }}
          label="Custom..."
          value="7"
        ></Picker.Item>
      </Picker>
      {/* <Text>Hello World</Text> */}
    </View>
  );
};

export default Pickers;

const styles = StyleSheet.create({});
