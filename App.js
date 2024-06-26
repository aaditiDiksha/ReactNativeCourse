import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
       <TextInput style={styles.textInput} placeholder="Your course goal!"/>
       <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List Of Goals....</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex:1
    },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth : 1,
    borderBottomColor: '#cccccc'

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    margin:8,
    padding: 8
  },
  goalsContainer: {
    flex:5
  }
  
});
