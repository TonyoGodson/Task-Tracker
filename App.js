import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
export default App;

// import react from "react";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import 'react-native-gesture-handler';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import {NavigationContainer} from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./screens/HomeScreen";
// import SearchScreen from "./screens/SearchScreen";
// import AddScreen from "./screens/AddScreen";
// import NotificationsScreen from "./screens/NotificationsScreen";
// import SettingsScreen from "./screens/SettingsScreen";

// const App = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//             tabBarIcon: ({focused, size, colour}) => {
//               let iconName;
//               if(route.name === "Home"){
//                 iconName = focused ? 'ios-home' : 'ios-home-outline';
//               }

//               else if(route.name === "Search"){
//                 iconName = focused ? 'search-sharp' : 'search-outline';
//               }

//               else if(route.name === "Add"){
//                 iconName = focused ? 'add-circle' : 'add-circle-outline';
//               }

//               else if(route.name === "Notifications"){
//                 iconName = focused ? 'notifications' : 'notifications-outline';
//               }

//               else if(route.name === "Settings"){
//                 iconName = focused ? 'settings-sharp' : 'settings-outline';
//               }
//             return <Ionic name = {iconName} size = {size} colour = {colour} />
//             },
//         })}
//         tabBarOptions = {{
//           activeTintColor: '#34A853',
//           inativeTintColor: '#1E1F4B',
//           showLabel: true,
//         }}
//       >
//         <Tab.Screen name = "Home" component={HomeScreen}/>
//         <Tab.Screen name = "Search" component={SearchScreen}/>
//         <Tab.Screen name = "Add" component={AddScreen}/>
//         <Tab.Screen name = "Notifications" component={NotificationsScreen}/>
//         <Tab.Screen name = "Settings" component={SettingsScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;

// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
