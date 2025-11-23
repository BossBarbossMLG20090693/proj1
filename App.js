import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, ScrollView } from 'react-native';

export default function App() {

  const saveData = () => {
    console.log(height);
    console.log(weight);
    console.log(age);
    console.log(target);

  }

  const {width} = Dimensions.get("window");
  const mainBlockWidth = width < 420 ? "88%" : 200;

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [target, setTarget] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
      <Text style={styles.headerText}>Это мой заголовок</Text>
      <View style={[styles.block, {width: mainBlockWidth}]}>
      <Text style={styles.mainText}>Это моё приложение</Text>
      <TextInput
      value={height}
      style={styles.textInput}
      onChangeText={(data) => setHeight(data)}
      placeholder='Ваш рост'/>
      <StatusBar style="auto" />
      </View>
      
      <View style={[styles.block, {width: mainBlockWidth}]}>
      <Text style={styles.mainText}>Это моё приложение</Text>
      <TextInput onChangeText={(data) => setWeight(data)} value={weight} style={styles.textInput} placeholder='Ваш вес'/>
      <StatusBar style="auto" />
      </View>
      
      <View style={[styles.block, {width: mainBlockWidth}]}>
      <Text style={styles.mainText}>Это моё приложение</Text>
      <TextInput onChangeText={(data) => setAge(data)} value={age} style={styles.textInput} placeholder='Ваш возраст'/>
      <StatusBar style="auto" />
      </View>

      <View style={[styles.block, {width: mainBlockWidth}]}>
      <Text style={styles.mainText}>Это моё приложение</Text>
      <TextInput onChangeText={(data) => setTarget(data)} value={target} style={styles.textInput} placeholder='Ваша цель'/>
      <StatusBar style="auto" />
      </View>
      <Button title='нажми на меня' onPress={saveData}/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block:{
    backgroundColor: "#a39e9eff",
    borderRadius: 20,

    margin: 15,

  },
  headerText:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  mainText:{
    textAlign: "center",
  },
  textInput: {
    borderColor: "black", 
    borderWidth: 2,
    margin: 4,
  },
});
