import * as React from 'react';
import { View, Text } from 'react-native';

export default function Event(navigation){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={()=> navigation.navigate('Event')}
                style={{fontSize:26, fontWeight:'bold'}}
            >
                Event Screen
            </Text>
        </View>
    );
}
