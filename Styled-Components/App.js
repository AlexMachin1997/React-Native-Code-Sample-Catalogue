import React, { Component } from 'react';
import { Platform } from 'react-native';
import styles from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const H1 = styles.Text`
font-size: 32px
`

const Text = styles.Text`
  font-size: 15px
  margin: 10px
`

const Container =  styles.View`
  flex-grow: 1;
  justify-content: ${props => {
    if(props.strech) return 'strech'
    if(props.flexStart) return 'flex-start'
    if(props.flexEnd) return 'flex-end'
    if(props.center) return 'center'
    else return 'center' // DEFAULT PROPS
  }};
`;

const Section = styles.View `
  flex-direction: ${props => props.row ? "row" : "column"}
    
  align-items: ${props => {
    if(props.strech) return 'strech'
    if(props.flexStart) return 'flex-start'
    if(props.flexEnd) return 'flex-end'
    if(props.center) return 'center'
    else return 'center' // DEFAULT PROPS
  }};
`

export default class App extends Component {
  render() {
    return (
      <Container center>
      <Section center>
        <H1>Styled-Components</H1>
        <Text>{instructions}</Text>
      </Section>
    </Container>
    );
  }
}
