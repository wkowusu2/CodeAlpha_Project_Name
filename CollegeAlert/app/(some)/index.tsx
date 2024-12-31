import { FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Event } from '@/constants/Types'
import EventsData from '@/constants/EventData'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const index = () => { 
  const [data, setData] = useState(EventsData) 
  let winHeight = useWindowDimensions().height
  let winWidth = useWindowDimensions().width
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#0077b3',}}>
          <FlatList data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()} 
           renderItem={(item) => {return (<View style= {{
            backgroundColor: '#0077b3',
            // 
          }}>
            <TouchableOpacity style={{backgroundColor: 'ghostwhite',borderWidth: 1,borderColor: '#0077b3',borderRadius: 5, marginLeft: 3,marginTop: 4, marginBottom: 5,paddingTop: 5,paddingRight: 5,paddingLeft: 5,paddingBottom: 0, width: winWidth -6, marginHorizontal: 'auto'}}>
            <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between' ,width:winWidth -20}}>
            <Text style={{fontSize: 24, color: '#8b4513'}}>{item.item.title}</Text>
            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="#8b4513" style={{marginTop: 3.5}} /></TouchableOpacity>
            </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <View style={{flexDirection: 'row'}}>
            <FontAwesome5 name="calendar" size={20} color="#0077b3" />
            <Text style={{fontSize: 18, color: '#0077b3',marginLeft: 4}}>{item.item.date}</Text>
            </View>
           <View style={{flexDirection: 'row'}}>
           <FontAwesome5 name="clock" size={18} color="#0077b3"  />
           <Text style={{fontSize: 18, color: '#0077b3',marginLeft: 4}}>{item.item.time}</Text>
           </View>
            {/* <Text style={{fontSize: 18, color: '#0077b3'}}>{item.item.location}</Text> */}
            </View>
            </TouchableOpacity>
           </View>)}}
          /> 
          <TouchableOpacity style={{backgroundColor: '#8b4513',width: winWidth -320,borderWidth: 1, borderRadius: 50,height: 70,position: 'absolute', bottom: 40, right: 10, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize: 30, color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({
  
})