import React, { Component, useState } from "react";
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Dropdown } from "react-native-material-dropdown-v2";
import CheckBox from "react-native-check-box";

const HomeScreen = ({ navigation }) => {
  const [showCalendr, setshowCalendr] = useState(false);

  const show = () => {
    showCalendr === false ? setshowCalendr(true) : setshowCalendr(false);
  };
  const taskCreated = [
    {
      id: 1,
      name: "Contact the CEO of Decagon",
      image: require("../assets/icons/uncheckbox.png"),
      image2: require("../assets/icons/edit2.png"),
      image3: require("../assets/icons/delete.png"),
      backgroundColor: "#D9D9D9",
    },
    {
      id: 2,
      name: "Design the onboarding session of the Task Tracker App",
      image: require("../assets/icons/uncheckbox.png"),
      image2: require("../assets/icons/edit2.png"),
      image3: require("../assets/icons/delete.png"),
      backgroundColor: "#CAB8FD",
    },
    {
      id: 3,
      name: "Remind the technical team to include the micro-interaction interactions delivered",
      image: require("../assets/icons/uncheckbox.png"),
      image2: require("../assets/icons/edit2.png"),
      image3: require("../assets/icons/delete.png"),
      backgroundColor: "#FDB8B8",
    },
  ];

  let data = [
    {
      value: "Daily",
    },
    {
      value: "Weekly on Tuesday",
    },
    {
      value: "Monthly on the last Tuesday",
    },
    {
      value: "Monthly on the first Tuesday",
    },
    {
      value: "Annually on July 26",
    },
    {
      value: "Every week day (Monday to Friday",
    },
    {
      value: "Custom...",
    },
  ];

  let data2 = [
    {
      value: "12:00AM",
    },
    {
      value: "12:15AM",
    },
    {
      value: "12:30AM",
    },
    {
      value: "12:45AM",
    },
    {
      value: "01:00AM",
    },
    {
      value: "01:15AM",
    },
    {
      value: "01:30AM",
    },
    {
      value: "01:15AM",
    },
    {
      value: "01:30AM",
    },
    {
      value: "01:45AM",
    },
    {
      value: "02:00AM",
    },
    {
      value: "02:15AM",
    },
    {
      value: "02:30AM",
    },
    {
      value: "02:45AM",
    },
  ];
  let data3 = [
    {
      value: "12:00PM",
    },
    {
      value: "12:15PM",
    },
    {
      value: "12:30PM",
    },
    {
      value: "12:45PM",
    },
    {
      value: "01:00PM",
    },
    {
      value: "01:15PM",
    },
    {
      value: "01:30PM",
    },
    {
      value: "01:15PM",
    },
    {
      value: "01:30PM",
    },
    {
      value: "01:45PM",
    },
    {
      value: "02:00PM",
    },
    {
      value: "02:15PM",
    },
    {
      value: "02:30PM",
    },
    {
      value: "02:45PM",
    },
  ];
  const oneTask = ({ item }) => {
    return (
      <View
        style={{
          width: 350,
          height: 45,
          padding: 10,
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 5,
          borderRadius: 12,
          backgroundColor: item.backgroundColor,
        }}
      >
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width: 30, position: "relative", top: -244 }}
        />
        <View style={{ width: 230, marginTop: -5, justifyContent: "center" }}>
          <Text
            style={{
              marginLeft: 5,
              paddingTop: 2,
              fontSize: 12,
              paddingEnd: 0,
            }}
          >
            {item.name}
          </Text>
        </View>
        <Image
          source={item.image2}
          resizeMode="contain"
          style={{
            width: 20,
            Height: 15,
            position: "relative",
            marginLeft: 10,
            top: -245,
          }}
        />
        <Image
          source={item.image3}
          resizeMode="contain"
          style={{
            width: 15,
            Height: 10,
            position: "relative",
            marginLeft: 10,
            top: -53,
          }}
        />
      </View>
    );
  };
  const [checked, setChecked] = useState(false);
  HeaderComponent = () => {
    return (
      <View style={{ width: 200, flexDirection: "row" }}>
        <Text style={{ marginLeft: 25 }}>Task Created</Text>
        <Image
          source={require("../assets/icons/sort.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            left: 240,
            top: 3,
            height: 20,
            width: 20,
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flexDirection: "column", marginTop: 25 }}>
      <View style={styles.rectangle5}>
        <View
          style={{
            position: "relative",
            top: 10,
            width: 40,
            height: 40,
            alignSelf: "flex-start",
            justifyContent: "space-between",
            borderRadius: 50,
          }}
        >
          <Image
            source={require("../assets/icons/back.png")}
            resizeMode="contain"
            style={{
              width: 25,
              height: 30,
              alignSelf: "center",
              borderRadius: 25,
            }}
          />
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "800",
            marginTop: -20,
          }}
        >
          Task Tracker
        </Text>
        <View
          style={{
            position: "relative",
            top: -47,
            width: 40,
            height: 40,
            alignSelf: "flex-end",
            justifyContent: "space-between",
            borderRadius: 50,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Image
            source={require("../assets/icons/001.jpg")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 40,
              alignSelf: "center",
              borderRadius: 25,
            }}
          />
        </View>
      </View>
      <Text style={{ margin: 10 }}>Title</Text>
      <TextInput
        style={{
          width: 280,
          position: "relative",
          top: -32,
          left: 38,
          paddingStart: 10,
          paddingEnd: 20,
        }}
      />
      <Image
        source={require("../assets/icons/check.png")}
        resizeMode="contain"
        style={{
          position: "relative",
          top: -58,
          right: -320,
          width: 25,
          height: 25,
        }}
      />
      <Image
        source={require("../assets/icons/edit2.png")}
        resizeMode="contain"
        style={{
          position: "relative",
          top: -85,
          right: -350,
          width: 25,
          height: 25,
        }}
      />
      <TextInput style={styles.input} multiline={true} />
      <View style={styles.rectangle}>
        <Image
          source={require("../assets/icons/photo.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 15,
            marginLeft: 15,
            width: 15,
            height: 15,
          }}
        />
        <Image
          source={require("../assets/icons/notification.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 15,
            marginLeft: 20,
            width: 15,
            height: 15,
          }}
        />

        <Image
          source={require("../assets/icons/paint.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 15,
            marginLeft: 20,
            width: 15,
            height: 15,
          }}
        />
        <Image
          source={require("../assets/icons/archive.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 12,
            marginLeft: 20,
            width: 20,
            height: 20,
          }}
        />
        <Image
          source={require("../assets/icons/undo.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 12,
            marginLeft: 140,
            width: 18,
            height: 18,
          }}
        />
        <Image
          source={require("../assets/icons/redo.webp")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 12,
            marginLeft: 15,
            width: 18,
            height: 20,
          }}
        />
        <Image
          source={require("../assets/icons/menu.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 12,
            marginLeft: 20,
            width: 20,
            height: 20,
          }}
        />
      </View>
      <View style={styles.rectangle2}>
        <Image
          source={require("../assets/icons/time.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            top: 5,
            left: 7,
            width: 25,
            height: 25,
          }}
        />
        <TouchableOpacity onPress={() => show()}>
          <Text style={{ marginLeft: 20, marginTop: 10 }}>Jul 26, 2022</Text>
        </TouchableOpacity>
        {showCalendr && (
          <Calendar
            theme={{
              todayBackgroundColor: "#ff0000",
              selectDayBackgroundColor: "#ff0000",
              calendarBackground: "#ffffff",
            }}
            style={{
              width: 300,
              borderRadius: 25,
              position: "absolute",
              left: -100,
              top: 35,
              opacity: 1,
            }}
          />
        )}
        <Text style={{ marginLeft: 20, marginTop: 10 }}>12:00AM</Text>
        <Image
          source={require("../assets/icons/uncheckbox.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: 85,
            width: 35,
            height: 30,
          }}
        />
        <Text style={{ marginTop: 10 }}>All day</Text>
      </View>
      {/* <Pickers /> */}
      {/* <TouchableOpacity style={{ backgroundColor: "transparent" }}> */}
      <Dropdown
        placeholder="Does not repeat"
        placeholderTextColor={"black"}
        paddingStart={0}
        paddingEnd={0}
        data={data}
        fontSize={12}
        style={{
          height: 30,
          marginLeft: "20%",
          top: "40%",
          backgroundColor: "transparent",
          fontSize: 13,
          width: "73%",
        }}
        containerStyle={{
          width: "70%",
          borderRadius: 10,
        }}
        itemTextStyle={{
          fontSize: 8,
          color: "red",
        }}
        dropdownOffset={{
          top: 80,
          left: 50,
        }}
        pickerStyle={{
          width: "55%",
          borderRadius: 30,
        }}
        itemPadding={7}
        // ={{
        //   backgroundColor: "red",
        // }}
      />

      <Dropdown
        placeholder="12:00AM"
        data={data2}
        placeholderTextColor={"black"}
        paddingStart={5}
        padding={0}
        borderWidth={2}
        borderRadius={7}
        width={"105%"}
        fontSize={12}
        style={{
          height: 30,
          backgroundColor: "transparent",
          fontSize: 14,
          top: "95%",
          marginLeft: "65%",
          width: "100%",
        }}
        containerStyle={{
          width: "20%",
          fontSize: 13,
          borderRadius: 10,
        }}
        itemTextStyle={{
          fontSize: 8,
        }}
        dropdownOffset={{
          top: 80,
        }}
        pickerStyle={{
          width: "15%",
          borderRadius: 10,
          marginTop: "1%",
          marginLeft: "10%",
        }}
      />
      <Dropdown
        placeholder="12:00AM"
        data={data3}
        placeholderTextColor={"black"}
        paddingStart={5}
        padding={0}
        borderWidth={2}
        borderRadius={7}
        width={"105%"}
        fontSize={12}
        style={{
          height: 30,
          backgroundColor: "transparent",
          fontSize: 14,
          marginLeft: "200%",
          width: "100%",
        }}
        containerStyle={{
          width: "20%",
          fontSize: 13,
          borderRadius: 10,
        }}
        itemTextStyle={{
          fontSize: 8,
        }}
        dropdownOffset={{
          top: 80,
        }}
        pickerStyle={{
          width: "22%",
          borderRadius: 10,
          marginTop: "1%",
          marginLeft: 145,
        }}
      />
      <View
        style={{
          width: 90,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: -35,
          left: 280,
          borderWidth: 2,
          borderRadius: 9,
          backgroundColor: "#FDB8B8",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 15 }}>1hr:00:00</Text>
      </View>

      {/* </TouchableOpacity> */}
      {/* <CheckBox checked={checked} onPress={() => setChecked(checked)} /> */}
      <FlatList
        style={{ marginTop: -18 }}
        ListHeaderComponent={HeaderComponent}
        data={taskCreated}
        renderItem={oneTask}
        ListEmptyComponent={<Text>Empty List</Text>}
      />
      <View></View>
      <View></View>
      <View style={styles.rectangle3}>
        <Image
          source={require("../assets/icons/task1.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: -7,
            width: 75,
            height: 70,
          }}
        />
        <Image
          source={require("../assets/icons/task2.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: -13,
            width: 75,
            height: 70,
          }}
        />
        <Image
          source={require("../assets/icons/task3.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: -13,
            width: 75,
            height: 70,
          }}
        />
        <Image
          source={require("../assets/icons/task4.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: -13,
            width: 75,
            height: 70,
          }}
        />
        <Image
          source={require("../assets/icons/task5.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: -13,
            width: 75,
            height: 70,
          }}
        />
        <Image
          source={require("../assets/icons/task6.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: -1,
            marginLeft: -13,
            width: 75,
            height: 85,
          }}
        />
      </View>
      <View style={styles.rectangle4}>
        <Text style={{ marginLeft: 15, fontSize: 12, color: "#4D5656" }}>
          Task1
        </Text>
        <Text style={{ marginLeft: 28, fontSize: 12, color: "#4D5656" }}>
          Task2
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 12, color: "#4D5656" }}>
          Task3
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 12, color: "#4D5656" }}>
          Task4
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 12, color: "#4D5656" }}>
          Task5
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 12, color: "#52BB69" }}>
          Task6
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    padding: 10,
    backgroundColor: "#B8FDBB",
    borderRadius: 12,
    width: 375,
    height: 120,
    marginTop: -80,
    textAlignVertical: "top",
    alignSelf: "center",
  },
  rectangle: {
    width: 375,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#B8FDBB",
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 12,
  },
  rectangle2: {
    width: 375,
    height: 30,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 7,
  },
  rectangle3: {
    width: 375,
    height: 105,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 7,
  },
  rectangle4: {
    width: 375,
    height: 15,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: -25,
    borderRadius: 7,
  },
  rectangle5: {
    width: 375,
    height: 50,
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 7,
  },
});

export default HomeScreen;
