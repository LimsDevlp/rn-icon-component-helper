import React, { Component } from 'react';
import { TouchableOpacity, Text, TextStyle, TouchableOpacityProps } from 'react-native';

interface Props {
    type: 'small' | 'normal' | 'big',
    accessibilityLabel: any,
    activeOpacity: any,
    onPress: any,
    children: any,
    buttonStyle: TouchableOpacityProps,
    textStyle: StyleProp<TextStyle>,
    text: any,
}

export default class RNButton extends Component<Props> {
    static defaultProps = {
        type: this.TYPE_NORMAL,
        activeOpacity: 0.2,
    }

    static TYPE_SMALL = 'small';

    static TYPE_NORMAL = 'normal';

    static TYPE_BIG = 'big';

    render() {
        const {
            accessibilityLabel,
            activeOpacity,
            onPress,
            children,
            text,
            type,
            buttonStyle,
            textStyle,
        } = this.props;
        switch (type) {
            default:
                this.RNButton = (
                    <TouchableOpacity
                        accessibilityLabel={accessibilityLabel}
                        activeOpacity={activeOpacity}
                        style={[{
                            width: 120,
                            height: 35,
                            backgroundColor: '#000000',
                            borderRadius: 18,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, buttonStyle]}
                        onPress={onPress}
                    >
                        {children}
                        <Text style={[{ fontSize: 12, color: '#FFFFFF' }, textStyle]}>{text}</Text>
                    </TouchableOpacity>
                );
                break;
            case RNButton.TYPE_SMALL:
                this.RNButton = (
                    <TouchableOpacity
                        accessibilityLabel={accessibilityLabel}
                        activeOpacity={activeOpacity}
                        style={[{
                            width: 90,
                            height: 35,
                            backgroundColor: '#000000',
                            borderRadius: 18,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, buttonStyle]}
                        onPress={onPress}
                    >
                        {children}
                        <Text style={[{ fontSize: 12, color: '#FFFFFF' }, textStyle]}>{text}</Text>
                    </TouchableOpacity>
                );
                break;
            case RNButton.TYPE_BIG:
                this.RNButton = (
                    <TouchableOpacity
                        accessibilityLabel={accessibilityLabel}
                        activeOpacity={activeOpacity}
                        style={[{
                            width: 150,
                            height: 35,
                            backgroundColor: '#000000',
                            borderRadius: 18,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, buttonStyle]}
                        onPress={onPress}
                    >
                        {children}
                        <Text style={[{ fontSize: 14, color: '#FFFFFF' }, textStyle]}>{text}</Text>
                    </TouchableOpacity>
                );
        }
        return (
            this.RNButton
        );
    }
}