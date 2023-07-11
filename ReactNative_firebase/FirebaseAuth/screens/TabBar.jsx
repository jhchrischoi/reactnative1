import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons'
//screens
import Event from './TabBarComponents/Event';
import Group from './TabBarComponents/Group';
import Post from './TabBarComponents/Post';

const eventName = 'Event';
const groupName = 'Group';
const postName = 'Post';

const Tab = createBottomTabNavigator();

export default function TabBar(){
    return(
        <>
            <Tab.Navigator
                initialRouteName={eventName}
                screenOptions={({route})=> ({
                    tabBarIcon:({focused, color, size })=> {
                        let iconName;
                        let rn = route.name;

                        if(rn===eventName){
                            iconName=focused?'home': 'home-outline'
                        }else if(rn===groupName){
                            iconName=focused?'home': 'home-outline'
                        }else if(rn===postName){
                            iconName=focused?'home': 'home-outline'
                        }
                        return <IonicIcon name={iconName} size={size} color={color}></IonicIcon>
                    },
                })}
            >
                <Tab.Screen name={eventName} component={Event}/>
                <Tab.Screen name={groupName} component={Group}/>
                <Tab.Screen name={postName} component={Post}/>
            </Tab.Navigator>
        </>
    )
}