import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Container, Header, Content, Body} from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>AVOID SCROLL</Text>
          </Body>
        </Header>
        <Content style={styles.container}>
          <View>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    margin: 15
  }
});
