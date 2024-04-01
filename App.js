import { StyleSheet, Text, View } from 'react-native';
import Name from './src/components/Name';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Name label={'Anirudh'} />
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
});
