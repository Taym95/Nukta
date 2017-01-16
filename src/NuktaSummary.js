import React from 'react';
import { CardItem, Text, Thumbnail } from 'native-base';

const NuktaSummary = ({ lang, tags, onSelect }) => {
    return (
        <CardItem onPress={ onSelect }>
            <Thumbnail source={ require('../img/jokes.png') } />
            <Text>Lang: { lang }</Text>
            <Text>Tags: { tags }</Text>
        </CardItem>
    );
};

export default NuktaSummary;
