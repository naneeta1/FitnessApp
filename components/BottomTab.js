import React from 'react';
import { View } from 'react-native';
import { Feather, Ionicons, Entypo, AntDesign, Fontisto } from '@expo/vector-icons';

const home = <Feather name="home" size={24} color="red" />;
const calendar = <Ionicons name="calendar" size={24} color="white" />;
const bar = <Entypo name="bar-graph" size={24} color="white" />;
const profile = <Fontisto name="person" size={24} color="white" />;
const plus = <AntDesign name="plus" size={40} color="white" />;

const BottomTab = () => (
  <View
    style={{
      position: 'absolute',
      bottom: 10,      
      borderRadius: 20,
      padding: 10,
      // width: '100%',
      backgroundColor: '#515151',
      flexDirection: 'row',
      alignItems: 'center',
      borderTopColor:'#5A5A5A',
      borderTopWidth:10,
    }}
  >
    <BottomButton icon={home} />
    <BottomButton icon={calendar} />
    <BottomButton
      icon={plus}
      style={{
        position: 'absolute',
        left: '44%',
        top: -35,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        width:60,
        height:60,
        fontSize:30,
        borderTopColor:'#515151',
        
      }}
    />
    <BottomButton />
    <BottomButton icon={bar} />
    <BottomButton icon={profile} />
  </View>
);

const BottomButton = ({ icon, style, iconStyle }) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {icon}
    </View>
  </>
);

export default BottomTab;


