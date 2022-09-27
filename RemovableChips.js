/**
 * @author Alexis Valenciano <gabr.933@gmail.com>
 */
import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Chips from './chips';

class RemovableChips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            chips: (props.initialChips) ? props.initialChips : [],
            inputText: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            chips: (nextProps.initialChips) ? nextProps.initialChips : []
        });
    }
    handleFocus = () => { this.setState({ isFocused: true }) }
    handleChangeText = (text) => { this.setState({ inputText: text }) }
    removeChip = (index) => {
        const newArray = [...this.state.chips]
        newArray.splice(index, 1);
        this.setState({
            chips: newArray
        }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
        if (this.props.alertRequired) Alert.alert('', 'Removed Successfully')
    }
    handleBlur = () => {
        if (this.state.inputText !== '' && this.state.chips.indexOf(this.state.inputText) === -1) {
            this.setState({
                chips: [...this.state.chips, this.state.inputText],
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
            if (this.props.alertRequired) Alert.alert('', 'Added Successfully');
        } else {
            this.setState({
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips))
            if (this.props.alertRequired) Alert.alert('Added Successfully', 'Chip Element already present');
        }
    }
    render() {
        const { label, chipStyle ,valueStyle,chipCloseStyle} = this.props;
        const inputLabel = (label) ? label : 'Enter Item'
        const { isFocused, inputText } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 5,
            top: !isFocused ? 12 : 0,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#E91E63',
            marginBottom:5
        }
        const chips = this.state.chips.map((item, index) => (
            <Chips
                isSelectable={this.props.isSelectable}
                key={index}
                value={item}
                chipStyle={chipStyle}
                valueStyle={valueStyle}
                chipCloseStyle={chipCloseStyle}
                onPress={() => this.removeChip(index)}
                type='removable' />
        ));
        return (
            <View>
                <View style={{ paddingTop: 18, marginTop: 15 }}>
                    <Text style={labelStyle}>
                        {inputLabel}
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        onFocus={this.handleFocus}
                        onChangeText={(text) => this.handleChangeText(text)}
                        onSubmitEditing={this.handleBlur}
                        value={inputText}
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {chips}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        fontSize: 20,
        padding: 10,
        color: '#000',
        
    }
});

export default RemovableChips;