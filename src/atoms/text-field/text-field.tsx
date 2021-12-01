import React from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {color} from '../../theme';
import {Text} from '../text/text';
import {TextPresets} from '../text/text.presets';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: 12,
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  color: color.text,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.palette.whiteGrey,
  borderWidth: 1,
  borderColor: color.palette.lightGrey,
  borderRadius: 12,
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: {[name: string]: ViewStyle} = {
  default: {},
  noMargin: {
    paddingVertical: 0,
  },
};

export interface TextFieldProps extends TextInputProps {
  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string;

  /**
   * The Placeholder text color provide custom placeholder color.
   */
  placeholderColor?: string;

  /**
   * Show lable or hide label content
   */
  showLabel?: boolean;

  /**
   * The label text if no labelTx is provided.
   */
  label?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[];

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS;

  /**
   *  Label presets
   */
  labelPreset?: TextPresets;
  /**
   *  Label Colors
   */
  labelTextColor?: string;

  forwardedRef?: any;
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    placeholderColor,
    label,
    showLabel = true,
    labelTextColor = color.palette.almostBlackGrey,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    labelPreset,
    forwardedRef,
    ...rest
  } = props;
  let containerStyle: ViewStyle = {...CONTAINER, ...PRESETS[preset]};
  containerStyle = {...containerStyle, ...styleOverride};

  let inputStyle: TextStyle = INPUT;
  inputStyle = {...inputStyle, ...inputStyleOverride};

  const labelTxColor: TextStyle = {
    color: showLabel ? labelTextColor : null,
  };

  return (
    <View style={containerStyle}>
      {showLabel && (
        <Text style={labelTxColor} preset={labelPreset} text={label} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
      />
    </View>
  );
}
