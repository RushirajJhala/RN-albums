import React from 'react';
import {Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style = {textStyle} >{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle : {
        backgroundColor: '#F8F800',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: "#FF0000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity : 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle : {
        fontSize : 30
    }
};

export default Header;