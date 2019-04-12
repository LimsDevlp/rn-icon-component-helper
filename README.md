# rn-icon-component-helper

A cross-platform (iOS, Android) button for React Native.

Features:
* Cross-platform (iOS, Android)
* Default styling works well
* Extensively customisable styling and rendering
* Use everything icon in react-native-vector-icons  

## Installation

Use Npm to install package: `npm install rn-icon-component-helper`

Use Yarn to install package: `yarn add rn-icon-component-helper`

`NOTED`: Dont forget install and link react-native-vector-icons.

## Props

- `name`: Set name icon (All name in react-native-vector-icons). Defaults to mobile.
- `type`: Set type icon (All type in react-native-vector-icons). Default to type entypo.
- `size`: Set size icon (Number). Default to 12
- `color`: Set color icon (Color code).
- `style`: Set style icon.
- `buttonStyle`: Styling for custom button (TouchableOpacityProps).

## Basic Usage

```js
import Icon from 'rn-icon-component-helper';

<Icon name='play-circle-outline' type='MaterialIcons' size={size} color={color} />
```

## License

[MIT](https://github.com/LimsDevlp/rn-icon-component-helper/raw/master/LICENSE.md)
