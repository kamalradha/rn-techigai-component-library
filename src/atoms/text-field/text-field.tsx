import React from 'react';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {color} from '../../theme';
import {Text} from '../text/text';
import {TextPresets} from '../text/text.presets';
import {
  EventData,
  EventType,
  ValidationSchema,
} from '../../common/structures/model';
import ErrorMessage from '../ErrorMessage';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: 8,
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  color: color.text,
  minHeight: 32,
  fontSize: 14,
  backgroundColor: color.palette.whiteGrey,
  borderWidth: 1,
  borderColor: color.palette.lightGrey,
  borderRadius: 8,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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
  title?: string;

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

  requiredIcon?: string;

  icon?: string;

  iconPosition?: string;

  defaultValue?: string;

  selectedValue?: string;
  forwardedRef?: any;

  hidden?: boolean;

  enable?: boolean;

  callback?:
    | ((payload: EventData, event?: NativeSyntheticEvent<any>) => void)
    | undefined;

  validationSchema?: ValidationSchema;

  errorMessage?: string;

  iconView?: any;

  requiredIconView?: any;
}

const enhance = (style: any, styleOverride: any) => {
  return {...style, ...styleOverride};
};

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    placeholderColor,
    title,
    showLabel = true,
    labelTextColor = color.palette.almostBlackGrey,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    labelPreset,
    forwardedRef,
    icon,
    requiredIcon,
    hidden,
    validationSchema,
    enable,
    iconView,
    requiredIconView,
    ...rest
  } = props;
  let containerStyle: ViewStyle = {...CONTAINER, ...PRESETS[preset]};
  containerStyle = enhance(containerStyle, styleOverride);

  let inputStyle: TextStyle = {
    ...INPUT,
    backgroundColor: !enable
      ? color.palette.lightGrey
      : color.palette.whiteGrey,
  };
  inputStyle = enhance(inputStyle, inputStyleOverride);

  const labelTxColor: TextStyle = {
    paddingBottom: 6,
    color: showLabel ? labelTextColor : undefined,
  };

  const handleChangeText = (text: string) => {
    console.log(text, rest.callback);
    var newModel = {...props};
    if (validationSchema?.required && text.trim().length === 0) {
      //rest.callback && rest.callback(EventType.CHANGE, text, undefined);
      newModel.errorMessage = newModel.validationSchema?.errors?.required;
    }
    rest.callback &&
      rest.callback({type: EventType.CHANGE, data: text, model: newModel});
  };

  return (
    <View style={containerStyle}>
      {showLabel && (
        <Text style={labelTxColor} preset={labelPreset} text={title} />
      )}
      <View style={{flexDirection: 'row'}}>
        <View style={[inputStyle, {flex: 1}]}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderColor || color.palette.lighterGrey}
            underlineColorAndroid={color.transparent}
            style={{flex: 1, padding: 8}}
            editable={enable}
            {...rest}
            ref={forwardedRef}
            onChangeText={handleChangeText}
          />
          {icon && iconView}
        </View>
        {requiredIcon != null ? (
          requiredIconView
        ) : (
          <View style={{width: 16}}></View>
        )}
      </View>
      <ErrorMessage {...props} />
    </View>
  );
}
