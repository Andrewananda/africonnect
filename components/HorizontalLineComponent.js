import React from 'react';
import {View} from 'react-native';

const HorizontalLineComponent = () => {
    return(
        <View
            style={{
                borderBottomColor: '#e7e7e7',
                borderBottomWidth: 1,
                left: 5,
                right:5,
                padding:5
            }}
        />
    )
}
export default HorizontalLineComponent;
