import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>eSports - NLW 09/2022</Text>

      <Button title='Botao Opacity A'/>
      <Button title='Hello'/>
      <Button title='World'/>

      <StatusBar style="auto" />

    </View>
  );
}

function Button (props: ButtonProps) {
  const { title } = props;
  return (
    <TouchableOpacity>
      <Text style={styles.btnTitle}>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f00',
    fontSize: 22
  },
  btnTitle: {
    color: '#00F',
    fontSize: 22,
    borderColor: '#000'
  }
});
