import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import {useState} from "react";

export default function App() {
  const [people,setPeople]= useState([
    {name:'bunty', key:'1'},
    {name:'keshav', key:'2'},
    {name:'kaustubh', key:'3'},
    {name:'karan', key:'4'},
    {name:'Vibhu', key:'5'},
  ])
  return (
    <View style={styles.container}>
      {people.map(element => {
        return (
          <View key={(element.key)}>
            <Text>{element.name}</Text>
          </View>
        )
      }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
