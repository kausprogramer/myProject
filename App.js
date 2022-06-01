import { Button, StyleSheet, Text, View,ScrollView, FlatList,TouchableOpacity } from 'react-native';
import {useState} from "react";

export default function App() {
  const [people,setPeople]= useState([
    {name:'bunty', id:'1'},
    {name:'keshav', id:'2'},
    {name:'kaustubh', id:'3'},
    {name:'karan', id:'4'},
    {name:'Vibhu', id:'5'},
    {name:'Kartik', id:'6'},
    {name:'lokesh', id:'7'},
    {name:'vinny', id:'8'},
  ]);

  const pressHandler=(id)=>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.id!=id)
    }
    )
    }

  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.element}>{item.name}</Text>
          </TouchableOpacity>
        )
        }
      />
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
  },
  element:{
    marginTop:24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize:24,
    marginHorizontal:10,
  }
});
