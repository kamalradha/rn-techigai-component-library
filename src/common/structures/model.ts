import {NativeSyntheticEvent} from 'react-native';

export interface Model {
  id?: string;

  title?: string;

  placeHolder?: string;

  requiredIcon?: string;

  icon?: string;

  iconPosition?: string;

  order?: number;

  column?: number;

  dependentFields?: Dependency;

  type?: string;

  dataType?: any;

  data?: any;

  defaultValue?: string;

  selectedValue?: string;

  validationSchema?: ValidationSchema;

  enable?: boolean;

  hidden?: boolean;

  valid?: boolean;

  errorMessage?: string;

  //style
  //  // callback handler //  //
  callback?:
    | ((payload: EventData, event?: NativeSyntheticEvent<any>) => void)
    | undefined;

  children?: null | Model[];
}

export type Dependency = {
  value: string;
  enable: string[];
  disable: string[];
  hide: string[];
};
export interface ValidationSchema {
  required?: boolean;
  range?: any;
  regex?: string;
  errors?: ValidationErrors;
  validator?: (value: any) => any;
}

export interface ValidationErrors {
  required: string;
  [key: string]: any;
}

export enum ElementFieldType {
  TextField = 'text',
  DropDownField = 'select',
  MultiSelectField = 'multiselect',
  ValueLabel = 'label',
  DateField = 'date',
  TimeField = 'time',
  DateTimeField = 'datetime',
}

export enum EventType {
  BLUR, //  Callback that is called when the input is blurred
  CLICK, //  Callback that is called when the input is clicked
  CHANGE, //  Callback that is called when the input's value changes
  FOCUS, //  Callback that is called when the text input is focused
  SELECTIONCHANGE, //  Callback that is called when the text input selection is changed
}

export type EventData = {
  type: EventType;
  data: any;
  model: any;
};
