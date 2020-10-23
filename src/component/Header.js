import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

function Header({titleText}){
    return(
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
};

   

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'blue'
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    }
});



export default Header;