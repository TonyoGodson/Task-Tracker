import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style = {{
            top: -37,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}   
    >
        <View style = {{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#34A853'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    righht: 20,
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }  
            }}
            tabBarOptions = {{
                  activeTintColor: '#34A853',
                  inativeTintColor: '#1E1F4B',
                  showLabel: true,
            }}
        >
            <Tab.Screen name = "Home" component = {HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source = {require('../assets/icons/home.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 25,
                                height: 25,       
                                tintColor: focused ? '#34A853' : '#1E1F4B', 
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name = "Search" component = {SearchScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source = {require('../assets/icons/search.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 25,
                                height: 25,       
                                tintColor: focused ? '#34A853' : '#1E1F4B', 
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name = " " component = {AddScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                       <Image 
                            source = {require('../assets/icons/add.png')}
                            resizeMode='contain'
                            style = {{
                                top: 7,
                                width: 30,
                                height: 30,
                                tintColor: '#FFFFFF'
                            }}
                       /> 
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
            <Tab.Screen name = "Notifications" component = {NotificationsScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source = {require('../assets/icons/notification.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 20,
                                height: 25,       
                                tintColor: focused ? '#34A853' : '#1E1F4B', 
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name = "Settings" component = {SettingsScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source = {require('../assets/icons/settings.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 20,
                                height: 25,       
                                tintColor: focused ? '#34A853' : '#1E1F4B', 
                            }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ff0000',
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;

// 7F5dF0