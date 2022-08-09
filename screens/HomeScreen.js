import React from 'react';
import {View, Button, Image, Text, TextInput, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const HomeScreen = ({navigation}) => {

    const [selected, setSelected] = React.useState("");

    const data = [
        {key: '1', value: 'Daily'},
        {key: '2', value: 'Weekly on Tuesday'},
        {key: '3', value: 'Monthly on the last Tuesday'},
        {key: '4', value: 'Monthly on the first Tuesday'},
        {key: '5', value: 'Annually on July 26'},
        {key: '6', value: 'Every weekday (Monday to Friday)'},
        {key: '7', value: 'Custom'}
    ];
    return (
        <View style = {{flexDirection: 'column'}}>
            <Text style = {{margin: 10}}>Title</Text>
            <TextInput style = {{
                width: 280,
                position: 'relative',
                top: -32,
                left: 38
            }}
            /> 
            <Image
            source = {require('../assets/icons/check.png')}
            resizeMode = 'contain'
            style = {{
                position: 'relative',
                top: -58,
                right: -320,
                width: 25,
                height: 25,        
            }}
        />
          <Image
            source = {require('../assets/icons/edit.png')}
            resizeMode = 'contain'
            style = {{
                position: 'relative',
                top: -85,
                right: -350,
                width: 25,
                height: 25,        
            }}
        />
            <TextInput style = {styles.input}
                multiline = {true}
            />
            <View style = {styles.rectangle}>
                <Image 
                     source = {require('../assets/icons/photo.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 10,
                     width: 25,
                     height: 25,        
            }}
                />
                <Image 
                     source = {require('../assets/icons/notification.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 20,
                     width: 25,
                     height: 25,        
            }}
                />   
                
                <Image 
                     source = {require('../assets/icons/paint.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 20,
                     width: 25,
                     height: 25,        
            }}
                />   
                <Image 
                     source = {require('../assets/icons/archive.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 20,
                     width: 25,
                     height: 25,        
            }}
                />    
                <Image 
                     source = {require('../assets/icons/undo.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 90,
                     width: 25,
                     height: 25,        
            }}
                /> 
                <Image 
                     source = {require('../assets/icons/redo.webp')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 15,
                     width: 25,
                     height: 28,        
            }}
                />      
                 <Image 
                     source = {require('../assets/icons/menu.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 15,
                     marginLeft: 20,
                     width: 25,
                     height: 25,        
            }}
                />  
                </View>
                <View style = {styles.rectangle2}>
                <Image 
                     source = {require('../assets/icons/time.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     top: 5,
                     left: 7,
                     width: 25,
                     height: 25,        
            }}
                /> 
                <Text style = {{marginLeft: 20, marginTop: 10}}>Jul 26, 2022</Text>
                <Text style = {{marginLeft: 20, marginTop: 10}}>12:00AM</Text>
                <Image 
                     source = {require('../assets/icons/uncheckbox.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 5,
                     marginLeft: 95,
                     width: 35,
                     height: 30,        
            }}
                /> 
                <Text style = {{marginTop: 10}}>All day</Text>
                </View> 
                <SelectList name = '' boxStyles = {{
                    position: 'absolute',
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
                    />

                <View style = {styles.rectangle3}>
                <Image 
                     source = {require('../assets/icons/task1.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop:5,
                     marginLeft: -26,
                     width: 105,
                     height: 100,      
            }}
                /> 
                  <Image 
                     source = {require('../assets/icons/task2.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 5,
                     marginLeft: -40,
                     width: 105,
                     height: 100,     
            }}
                /> 
                  <Image 
                     source = {require('../assets/icons/task3.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 5,
                     marginLeft: -40,
                     width: 105,
                     height: 100,      
            }}
                /> 
                  <Image 
                     source = {require('../assets/icons/task4.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 5,
                     marginLeft: -40,
                     width: 105,
                     height: 100,       
            }}
                /> 
                                <Image 
                     source = {require('../assets/icons/task5.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: 5,
                     marginLeft: -40,
                     width: 105,
                     height: 100,       
            }}
                /> 
                  <Image 
                     source = {require('../assets/icons/task6.png')}
                     resizeMode = 'contain'
                     style = {{
                     position: 'relative',
                     marginTop: -1,
                     marginLeft: -40,
                     width: 105,
                     height: 115,        
            }}
                /> 
                </View>
                <View style = {styles.rectangle4}>
                    <Text style = {{marginLeft: 10, fontSize: 12, color: '#4D5656'}}>Task1</Text>
                    <Text style = {{marginLeft: 32, fontSize: 12, color: '#4D5656'}}>Task2</Text>
                    <Text style = {{marginLeft: 32, fontSize: 12, color: '#4D5656'}}>Task3</Text>
                    <Text style = {{marginLeft: 32, fontSize: 12, color: '#4D5656'}}>Task4</Text>
                    <Text style = {{marginLeft: 32, fontSize: 12, color: '#4D5656'}}>Task5</Text>
                    <Text style = {{marginLeft: 32, fontSize: 12, color: '#52BB69'}}>Task6</Text>
                </View>  
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    input: {
        padding: 10,
        backgroundColor: '#B8FDBB',
        borderRadius: 7,
        width: 375,
        height: 150,
        marginTop: -80,
        textAlignVertical: 'top',
        alignSelf: 'center'
    },
    rectangle: {
        width: 375,
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#B8FDBB',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 7
    },
    rectangle2: {
        width: 375,
        height: 105,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 7
    },
    rectangle3: {
        width: 375,
        height: 105,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 7
    },
    rectangle4: {
        width: 375,
        height: 15,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 7
    }
});


