import * as React from 'react';
import { View, Text } from 'react-native';

export default function Group(navigation){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={()=> navigation.navigate('Group')}
                style={{fontSize:26, fontWeight:'bold'}}
            >
                Group Screen
            </Text>
        </View>
    );
}
