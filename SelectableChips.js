/**
 * @author Alexis Valenciano <gabr.933@gmail.com>
 */
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Chips from './chips';

class SelectableChips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChips: (props.initialSelectedChips) ? props.initialSelectedChips : [],
            isFocused: false,
            chips: (props.initialChips) ? props.initialChips : []
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            chips: (nextProps.initialChips) ? nextProps.initialChips : [],
            selectedChips: (nextProps.initialSelectedChips) ? nextProps.initialSelectedChips : [],
        });
    }
    selectChip=(value)=>{
        
        if(this.isSelected(value)){
            let array = [...this.state.selectedChips]
            let result = array.filter((text)=>{
                return text!=value
            })
            this.setState({
                selectedChips:result
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.selectedChips));
            if (this.props.alertRequired) Alert.alert('', 'Unselected')
        }else{
            let array = [...this.state.selectedChips]
            array.unshift(value)  
            this.setState({
                selectedChips:array
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.selectedChips));          
            if (this.props.alertRequired) Alert.alert('', 'Selected')
        }
        
        
        
    }
    isSelected=(value)=>{
        let array = [...this.state.selectedChips]
        return array.includes(value)
    }
    render() {
        
        const { chipStyle,valueStyle,valueStyleSelected,chipStyleSelected} = this.props;
        
        const chips = this.state.chips.map((item,index) => (
            <Chips
                key={index}
                value={item}
                chipStyle={chipStyle}
                valueStyle={valueStyle}
                valueStyleSelected={valueStyleSelected}
                chipStyleSelected={chipStyleSelected}
                onPress={() => this.selectChip(item)} 
                type='selectable'
                selected={this.isSelected(item)}/>
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

export default SelectableChips;