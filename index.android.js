 import jokes from 'jokes.dz'
 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';

 const nukat = jokes.all;

 export default class Nukta extends Component {
     render() {
         return (
             <Container>
                 <Content>
                     <Card dataArray={nukat}
                           renderRow={(nukata) =>
                            <CardItem>
                                <Thumbnail source={'./img/'} />
                                <Text> lang :{nukata.lang}</Text>
                                <Text>tag :{nukata.tags}</Text>
                            </CardItem>
                        }>
                     </Card>
                 </Content>
             </Container>
         );
     }
 }


 AppRegistry.registerComponent('Nukta', () => Nukta);
