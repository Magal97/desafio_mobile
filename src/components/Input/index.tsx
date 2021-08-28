import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  iconColor?: string;
  placeholder: string;
  password?: boolean;
  value: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  iconColor,
  placeholder,
  password,
  value,
  ...rest
}) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleButtonPress = () => {
    if (password) {
      setShowPassword(!showPassword)
    }
  }

  return (
    <Container>
      <TextInput {...rest} secureTextEntry={password && !showPassword} value={value} placeholderTextColor="#B2BECF" placeholder={placeholder} />
      {icon ? (
        <TouchableOpacity onPress={() => handleButtonPress()}>
          <FeatherIcons
            name={icon}
            size={20}
            color={iconColor}
            style={{ marginRight: 8 }}
          />
        </TouchableOpacity>
      ) : null}
    </Container>
  );
};

export default Input;
