import React, {memo} from 'react';
import {View} from 'react-native';

interface SpaceT {
  height: number;
}

const Space = memo<SpaceT>(({height}) => (
  <View style={{height: height || 20}} />
));

export {Space};
