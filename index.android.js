 import jokes from 'jokes.dz'
 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform } from 'react-native';
 import { Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3  } from 'native-base';

 const nukat = jokes.all;

 export default class Nukta extends Component {
   
   constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,        
            selectedItem: undefined,
            results: nukat
        }
    }
     
     setModalVisible(visible, x) {
        this.setState({
            modalVisible: visible,
            selectedItem: x
        });
    }

     render() {
         return (
             <Container>
                 <Content>
                     <Card dataArray={nukat}
                           renderRow={(nukata) =>
                            <CardItem onPress={()=>this.setModalVisible(true, nukata)}>
                                <Thumbnail source={require('./img/jokes.png')} />
                                <Text>  Lang :{nukata.lang}</Text>
                                <Text>  Tags :{nukata.tags}</Text>
                            </CardItem>
                        }>
                     </Card>
                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {alert("Modal has been closed.")}} >
                        <Card style={{paddingTop: 20}}>
                            {!this.state.selectedItem ? <View />
                            :  <CardItem cardBody style={{justifyContent: 'flex-start'}}>
                                <Image style={styles.modalImage} source={{uri: this.state.selectedItem.img}}  />
                                <H3 style={styles.header}> {this.state.selectedItem.joke}
                                </H3>
                                <Button danger style={{alignSelf: 'flex-end'}} onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible, this.state.selectedItem)
                                    }}>
                                    Go Back
                                </Button>
                            </CardItem>
                            }
                        </Card>
                    </Modal>
                 </Content>
             </Container>
         );
     }
 }

 const styles = StyleSheet.create({
    header : {
        marginLeft: -5,
        marginTop: 5,
        marginBottom: (Platform.OS==='ios') ? -7 : 0,
        lineHeight: 24,
        color: '#5357b6'
    },
    modalImage: {
        resizeMode: 'contain',
        height: 200
    },
    bold: {
        fontWeight: '600'
    },
    negativeMargin: {
        marginBottom: -10
    }
});



 AppRegistry.registerComponent('Nukta', () => Nukta);
