import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Title, IconButton} from 'react-native-paper';
import navigation from '../navigation';

 const Header = () => {
     return(
     <Appbar.Header style={styles.headerContainer}>
         {/* <View style={styles.container}> */}
             <Title style={styles.title}>Add a simple note</Title>
             <IconButton
                icon = 'close'
                size = {25}
                color = 'white'
                style={styles.iconButton}
            /> 
         {/* </View> */}
     </Appbar.Header>
     )
 };
     /* return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
       // width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
}); */

const styles = StyleSheet.create({
    title: {
         color: '#fff'
    },
    headerContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        backgroundColor: 'green',
        position: 'absolute',
        right: 0,
        margin: 10
    }
})

export default Header;