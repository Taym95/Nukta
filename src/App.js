import React, { Component } from 'react';
import jokes from 'jokes.dz'
import { Modal } from 'react-native';
import { Container, Header, Title, Content, Card, View } from 'native-base';
import NuktaItem from './Nukta';
import NuktaSummary from './NuktaSummary';

class App extends Component {
    state = {
        selectedItem: null,
    };

   closeModal = () => {
       this.setState({
           selectedItem: null
       });
   };

   selectNukta = nukta => () => {
       this.setState( {
           selectedItem: nukta
       } );
   }

    render() {
        return (
            <Container>
               <Header>
                   <Title>Nukta</Title>
               </Header>
                <Content>
                    <Card dataArray={ jokes.all } renderRow={
                       nukta => <NuktaSummary { ...nukta } onSelect={ this.selectNukta( nukta ) }/> }
                   />
                   <Modal animationType="slide" transparent={ false } visible={ !! this.state.selectedItem } onRequestClose={ this.closeModal }>
                       <Card style={ { paddingTop: 20 } }>
                           { ! this.state.selectedItem
                               ? <View />
                               : <NuktaItem { ...this.state.selectedItem } onClose={ this.closeModal } />
                           }
                       </Card>
                   </Modal>
                </Content>
            </Container>
        );
    }
}

export default App;
