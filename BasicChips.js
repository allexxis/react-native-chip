/**
 * @author Alexis Valenciano <gabr.933@gmail.com>
 */
import React from 'react';
import { View, Alert } from 'react-native';
import Chips from './chips';

class BasicChips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChips:[],
            isFocused: false,
            chips: (props.initialChips) ? props.initialChips : []
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            chips: (nextProps.initialChips) ? nextProps.initialChips : [],
            
        });
    }
    selectChip=()=>{
        if (this.props.alertRequired) Alert.alert('', 'Selected')
    }
    render() {
        
        const { chipStyle,valueStyle} = this.props;
        
        const chips = this.state.chips.map((item,index) => (
            <Chips
                key={index}
                value={item}
                chipStyle={chipStyle}
                valueStyle={valueStyle}
                type=''/>
        ));
        return (
            <View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {chips}
                </View>
            </View>
        )
    }
}

export default BasicChips;