import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="search-sharp" size={24} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity style={styles.suggestionsIcon}>
      <Octicons name="filter" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginLeft:10,
    marginRight:10,

  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000000',
  },
  icon: {
    marginRight: 10,
  },
  suggestionsIcon: {
    marginLeft: 10,
    backgroundColor:'#FF0000',
    padding:10,
    borderRadius:10,
  },
});
export default SearchBar
