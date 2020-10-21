import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (

    <View >
      <View style={styles.statusBar}>
      </View>
      <View style={styles.screen}>
        <View style={styles.container}>
          <TextInput
            placeholder="Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>

        <View>
          {courseGoals.map(goal => (
            <View style={styles.listItem} key={goal}>
              <Text>{goal}</Text>
            </View>
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    padding: 25,
    backgroundColor: 'black'
  },
  screen: {
    padding: 10,
  },
  container: {
    //flex: 1,    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5
  }
});

