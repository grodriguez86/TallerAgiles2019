import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native'
import DrawerScreen from './navigation/drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#072F46',
            paddingLeft: 10,
            paddingRight: 10
        },
        headerLayoutPreset: 'center',
        headerTintColor: 'white',
        headerLeft: <View>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                <Text style={{color:'white'}}>Menu</Text>
            </TouchableHighlight>
        </View>
    })
})

export default DrawerNavigation;