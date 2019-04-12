import React, { Component } from 'react';
import { TouchableOpacity, StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
    type: 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial' | 'AntDesign',
    size: number,
    color: string,
    name: string,
    style: StyleProp<TextStyle>,
    buttonStyle: TouchableOpacityProps,
}

export default class Icon extends Component<Props> {

    static TYPE_ENTYPO = 'Entypo';
    static TYPE_EVILICONS = 'EvilIcons';
    static TYPE_FEATHER = 'Feather';
    static TYPE_FONTAWESOME = 'FontAwesome';
    static TYPE_FONTAWESOME5 = 'FontAwesome5';
    static TYPE_ANTDESIGN = 'AntDesign';
    static TYPE_FOUNDATION = 'Foundation';
    static TYPE_IONICONS = 'Ionicons';
    static TYPE_MATERIALCOMMUNITYICONS = 'MaterialCommunityIcons';
    static TYPE_MATERIALICONS = 'MaterialIcons';
    static TYPE_OCTICONS = 'Octicons';
    static TYPE_ZOCIAL = 'Zocial';
    static TYPE_SIMPLELINEICONS = 'SimpleLineIcons';

    static defaultProps = {
        type: this.TYPE_ENTYPO,
        size: 12,
        color: '#000000',
        name: 'mobile',
        style: {},
    }

    render() {
        switch (this.props.type) {
            default:
                this.icon = (<Entypo name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_EVILICONS:
                this.icon = (<EvilIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_FEATHER:
                this.icon = (<Feather name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_FONTAWESOME:
                this.icon = (<FontAwesome name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_FOUNDATION:
                this.icon = (<Foundation name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_IONICONS:
                this.icon = (<Ionicons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_MATERIALCOMMUNITYICONS:
                this.icon = (<MaterialCommunityIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_MATERIALICONS:
                this.icon = (<MaterialIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_OCTICONS:
                this.icon = (<Octicons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_ZOCIAL:
                this.icon = (<Zocial name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_SIMPLELINEICONS:
                this.icon = (<SimpleLineIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_ANTDESIGN:
                this.icon = (<AntDesign name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
            case Icon.TYPE_FONTAWESOME5:
                this.icon = (<FontAwesome5 name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
                break;
        }
        if (this.props.onPress == null) {
            return this.icon;
        } else {
            return <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.6} style={[this.props.buttonStyle]}>{this.icon}</TouchableOpacity>
        }
    }
}