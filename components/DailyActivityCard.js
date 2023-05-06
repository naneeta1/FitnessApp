import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const DailyActivityCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headingContainer}>
    <Text style={styles.heading}>Daily Activity</Text>
    <TouchableOpacity>
      <Text style={styles.detailsText}>See Details</Text>
    </TouchableOpacity>
  </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
        <MaterialIcons name="local-fire-department" size={24} color="red" />
          <Text style={styles.iconText}>520 kcal</Text>
          <Text style={styles.iconSubtext}>Calories</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Entypo name="bar-graph" size={30} color="red" />
          <Text style={styles.iconText}>8 workouts</Text>
          <Text style={styles.iconSubtext}>trainings</Text>
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesome name="clock-o" size={30} color="red" />
          <Text style={styles.iconText}>30 mins</Text>
          <Text style={styles.iconSubtext}>duration</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5A5A5A',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    opacity:0.9,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    color:'white',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white',
  },
  iconSubtext: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});

export default DailyActivityCard;
