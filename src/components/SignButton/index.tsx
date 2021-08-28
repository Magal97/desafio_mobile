import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonText } from './styles';

interface RouteProps {
  onPressButton?: () => void;
  buttonText: string;
  textColor: string;
  isLoading?: boolean;
}
const SignButton = ({
  onPressButton,
  buttonText,
  textColor,
  isLoading,
  ...rest
}: RouteProps) => {
  const navigate = useNavigation();

  return (
    <Container {...rest}>
      <TouchableOpacity
        style={{ width: '100%', alignItems: 'center' }}
        activeOpacity={0.8}
        onPress={onPressButton}>
        {!isLoading ? (<ButtonText style={{ color: `${textColor}` }}>
          {`${buttonText}`}
        </ButtonText>) : <ActivityIndicator animating={isLoading} color='#ffffff' size='small' />}
      </TouchableOpacity>
    </Container>
  );
};

export default SignButton;
