// Import React and Component
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const NavigationDrawerHeader = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Icon type="material-community"
                    name="menu"
                    color={colors.orange}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    );
};
export default NavigationDrawerHeader;

