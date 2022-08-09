import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const AddScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>Add Screen</Text>
            <Button 
                title = "Click Here"
                onPress = {() => alert('Button Clicked')}
                />
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    }
});
