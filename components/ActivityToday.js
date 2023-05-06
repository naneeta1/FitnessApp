import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Activities from './Activities'
import { FontAwesome5 } from '@expo/vector-icons';





const ActivityToday = () => {
  const running = <FontAwesome5 name="running" size={30} color="red" />;
  const walking = <FontAwesome5 name="walking" size={30} color="red" />
  return (
    <View>
         <View style={styles.headingContainer}>
        <Text style={styles.heading}>Daily Activity</Text>
        <TouchableOpacity>
          <Text style={styles.detailsText}>See Details</Text>
        </TouchableOpacity>
      </View>
      <Activities imageSource={running} title={'Running'} distance={'2km'}/>
      <Activities imageSource={walking} title={'walking'} distance={'2km'}/>
    </View>
  )
}

export default ActivityToday

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    color:'white',
    marginTop:10,
    marginHorizontal:30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
  },

})