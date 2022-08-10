import React from "react";
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";

const HomeScreen = ({ navigation }) => {
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
          style={{ width: 30, Height: 5, position: "relative", top: -244 }}
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
  // const [selected, setSelected] = React.useState("Does not repeat");
  // const [firstDa, setFirstDa] = React.useState("12:00am");

  // const data = [
  //     {key: '1', value: 'Daily'},
  //     {key: '2', value: 'Weekly on Tuesday'},
  //     {key: '3', value: 'Monthly on the last Tuesday'},
  //     {key: '4', value: 'Monthly on the first Tuesday'},
  //     {key: '5', value: 'Annually on July 26'},
  //     {key: '6', value: 'Every weekday (Monday to Friday)'},
  //     {key: '7', value: 'Custom'}
  // ];

  // const da = [
  //     {key: '1', value: '12:00am'},{key: '2', value: '12:15am'},{key: '3', value: '12:30am'},{key: '4', value: '12:45am'},{key: '5', value: '01:00am'},
  //     {key: '6', value: '01:15am'},{key: '7', value: '01:30am'},{key: '8', value: '01:45am'},{key: '9', value: '02:00am'},{key: '10', value: '02:15am'},
  //     {key: '11', value: '02:30am'},{key: '12', value: '02:45am'},{key: '13', value: '03:00am'},{key: '14', value: '03:15am'},{key: '15', value: '03:30am'},
  //     {key: '16', value: '03:45am'},{key: '17', value: '04:00am'},{key: '18', value: '04:15am'},{key: '19', value: '04:30am'},{key: '20', value: '04:45am'},
  //     {key: '21', value: '05:00am'},{key: '22', value: '05:15am'},{key: '23', value: '05:30am'},{key: '24', value: '05:45am'},{key: '25', value: '06:00am'},
  //     {key: '26', value: '06:15am'},{key: '27', value: '06:30am'},{key: '28', value: '06:45am'},{key: '29', value: '07:00am'},{key: '30', value: '07:15am'},
  //     {key: '31', value: '07:30am'},{key: '32', value: '07:45am'},{key: '33', value: '08:00am'},{key: '34', value: '08:15am'},{key: '35', value: '08:30am'},
  //     {key: '36', value: '08:45am'},{key: '37', value: '09:00am'},{key: '38', value: '09:15am'},{key: '39', value: '09:30am'},{key: '40', value: '09:45am'},
  //     {key: '41', value: '10:00am'},{key: '42', value: '10:15am'},{key: '43', value: '10:30am'},{key: '44', value: '10:45am'},{key: '46', value: '11:00am'},
  //     {key: '47', value: '11:15am'},{key: '48', value: '11:30am'},{key: '49', value: '11:45am'}
  // ];
  return (
    <View style={{ flexDirection: "column", marginTop: 10 }}>
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
        <Text style={{ marginLeft: 20, marginTop: 10 }}>Jul 26, 2022</Text>
        <Text style={{ marginLeft: 20, marginTop: 10 }}>12:00AM</Text>
        <Image
          source={require("../assets/icons/uncheckbox.png")}
          resizeMode="contain"
          style={{
            position: "relative",
            marginTop: 5,
            marginLeft: 95,
            width: 35,
            height: 30,
          }}
        />
        <Text style={{ marginTop: 10 }}>All day</Text>
      </View>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={taskCreated}
        renderItem={oneTask}
        ListEmptyComponent={<Text>Empty List</Text>}
      />

      {/* <SelectList  boxStyles = {{
                    position: 'relative',
                    width: 150,
                    marginLeft: 34, 
                    borderWidth: 0,
                    marginTop: -75
                    }} 
                    dropdownStyles = {{
                        width: 250,
                        marginLeft: 34, 
                        paddingLeft: 0,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 0
                    }}
                    data = {data} 
                    setSelected = {setSelected} 
                    /> */}
      <View>
        {/* <SelectList  boxStyles = {{
                    position: 'absolute',
                    width: 150,
                    padding: 0,
                    marginLeft: 34, 
                    borderWidth: 1,
                    marginTop: -35
                    }} 
                    dropdownStyles = {{
                        width: 120,
                        paddingLeft: 0,
                        marginLeft: 34, 
                        backgroundColor: '#FFFFFF',
                        borderWidth: 0
                    }}
                    data = {da} 
                    setSelected = {setFirstDa} 
                    /> */}
      </View>
      <View>
        {/* <SelectList  boxStyles = {{
                    position: 'absolute',
                    width: 150,
                    height:10,
                    padding: 0,
                    marginLeft: 124, 
                    borderWidth: 1,
                    marginTop: -35
                    }} 
                    dropdownStyles = {{
                        width: 250,
                        marginLeft: 34, 
                        paddingLeft: 0,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 0
                    }}
                    data = {data} 
                    setSelected = {setSelected} 
                    /> */}
      </View>
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
    </View>
  );
};

export default HomeScreen;

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
  //   task_created_rect: {
  //     width: 350,
  //     height: 45,
  //     padding: 10,
  //     flexDirection: "row",
  //     alignSelf: "center",
  //     marginTop: 5,
  //     borderRadius: 12,
  //     backgroundColor: item.backgroundColor,
  //   },
  rectangle2: {
    width: 375,
    height: 105,
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
