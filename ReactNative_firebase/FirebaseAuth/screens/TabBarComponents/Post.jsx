import * as React from 'react';
import { View, Text } from 'react-native';

export default function Post(navigation){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={()=> navigation.navigate('Post')}
                style={{fontSize:26, fontWeight:'bold'}}
            >
                Post Screen
            </Text>
        </View>
    );
}
