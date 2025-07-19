import { StyleSheet, Text, View } from 'react-native';

export default function BlogScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Blog</Text>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});