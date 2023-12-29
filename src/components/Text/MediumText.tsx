import React from 'react'
import { colors} from '../../utils/colors'
import styled from 'styled-components'
import { TextProps } from './types';
import { Text } from 'react-native';


const StyledText = styled(Text)`
  font-size: 32px;
  color: ${colors.graydark};
  text-align: left; 
  font-family: Quicksand;
`;


export const MediumText = (props: TextProps) => {
  return (
    <StyledText>{props.children}</StyledText>
  )
}
