import React from 'react';
import {TextStyle, View} from 'react-native';
import {Model} from '../common/structures/model';
import {Text} from './text';

const ErrorMessage: React.FunctionComponent<Model> = (modelProps: Model) => {
  const errorStyle: TextStyle = {
    color: 'red',
  };

  return (modelProps.errorMessage || '').length > 0 ? (
    <View>
      <Text
        style={errorStyle}
        preset={'secondary'}
        text={modelProps.errorMessage}
      />
    </View>
  ) : (
    <></>
  );
};

export default ErrorMessage;
