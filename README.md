# React Native Chip

React navite component to represent a list with different functionalities on  a chip view base on react-native-chips

## Getting Started


`npm i react-native-chip`

## Usage

```
import RemovableChips from 'react-native-chip/RemovableChips'

<RemovableChips label="Enter item" initialChips={["Person", "Chair"]} onChangeChips={(chips) => console.log(chips)} alertRequired={true}/>

import SelectableChips from 'react-native-chip/SelectableChips'

<SelectableChips initialChips={["Person", "Chair","Coma","Dog"]} onChangeChips={(chips) => console.log(chips)} alertRequired={false}/>
```

## Properties RemovableChips
 name                 | description                                 | type     | default
:-------------------- |:------------------------------------------- |:-------- |:------------------
 label            | Placeholder for the Text input                     | String    | 'Enter Item'
initialChips            | Initial Chips to be present                     | Array    | -
onChangeChips            | To get the value of chips in array                     | Function    | -
alertRequired            | To trigger alert on adding and removing chips                     | Boolean    | false
chipStyle            | Changing the style of chip elements                    | Style Object    | -
valueStyle            | Changing the style of the value inside the chip                    | Style Object    | -
chipCloseStyle            | Changing the x close of the chip                    | Style Object    | -
## Properties SelectableChips
 name                 | description                                 | type     | default
:-------------------- |:------------------------------------------- |:-------- |:------------------
initialChips            | Initial Chips to be present                     | Array    | -
onChangeChips            | To get the value of selected chips in array                     | Function    | -
alertRequired            | To trigger alert on adding and removing chips                     | Boolean    | false
chipStyle            | Changing the style of chip elements                    | Style Object    | -
valueStyle            | Changing the style of the value inside the chip                    | Style Object    | -
valueStyleSelected            | Changing the style of the value inside the chip when is selected                    | Style Object    | -
chipStyleSelected            | Changing the style of chip elements when is selected                    | Style Object    | -
## Properties BasicChip
 name                 | description                                 | type     | default
:-------------------- |:------------------------------------------- |:-------- |:------------------
initialChips            | Initial Chips to be present                     | Array    | -
alertRequired            | To trigger alert on adding and removing chips                     | Boolean    | false
chipStyle            | Changing the style of chip elements                    | Style Object    | -
valueStyle            | Changing the style of the value inside the chip                    | Style Object    | -

## Sample

![demo_removablechips](https://media.giphy.com/media/fH92y5o07dfCfSXI7o/giphy.gif)
![demo_selectablechips](https://media.giphy.com/media/74Z7F9chjbqqfeycS9/giphy.gif) 
![demo_complete](https://media.giphy.com/media/xFmyrQnOPH1Tr1IoGj/giphy.gif) 


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or reach me out via email gabr.933@gmail.com if you have an idea how i can improve the component.


## License
react-native-chips is [LICENSE](LICENSE.MD) @ Alexis Valenciano 
