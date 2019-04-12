# rn-button-component-helper

A cross-platform (iOS, Android) button for React Native.

Features:
* Cross-platform (iOS, Android)
* Default styling works well
* Extensively customisable styling and rendering
* Many button type variations:
    `small`, `normal`, `big`, etc.  

## Installation

Use Npm to install package: `npm install rn-button-component-helper`

Use Yarn to install package: `yarn add rn-button-component-helper`

## Props

- `activeOpacity`: Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.
- `type`: The variants of button. Default to normal
- `text`: Text of button. Default to none
- `onPress`: Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
- `accessibilityLabel`: Overrides the text that's read by the screen reader when the user interacts with the element.
- `buttonStyle`: Styling for custom button (TouchableOpacityProps). 
- `textStyle`: Styling for custom text (StyleProp<TextStyle>).

## Basic Usage

```js
import RNButton from 'rn-button-component-helper';

<RNButton
    accessibilityLabel={accessibilityLabel}
    onPress={onPress}
    activeOpacity={activeOpacity}
    type={type}
    buttonStyle={{buttonStyle}}
    textStyle={{textStyle}}
    text={text}
    />
```

## Custom Usage

```js
import RNButton from 'rn-button-component-helper';

<RNButton
    accessibilityLabel={accessibilityLabel}
    onPress={onPress}
    activeOpacity={activeOpacity}
    type={type}
    buttonStyle={{buttonStyle}}
    textStyle={{textStyle}}
    >

    {children}

</RNButton>
```

## License

[MIT](https://github.com/LimsDevlp/rn-button-component-helper/raw/master/LICENSE.md)
