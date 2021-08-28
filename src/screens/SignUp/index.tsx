import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/SignButton';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth/AuthContext';
import Toast from 'react-native-toast-message';

import {
  Container,
  Banner,
  ModalBackground,
  Title,
  TransparentLogo,
  AbsoluteButton,
  ModalContainer,
  LoginText,
  InputTitle,
  ForgotPasswordText,
  TitleRow,
  MediumText,
  BoldText,
  CoverBackground,
} from './styles';

const SignUp = () => {
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { defaultSignUpUser } = useAuth();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
  }, [])

  const _keyboardDidShow = () => {
    setKeyboardIsOpen(true);
  }

  const _keyboardDidHide = () => {
    setKeyboardIsOpen(false);
  }

  const handleSingUp = async () => {
    try {
      /* if (email == 'diogo_zoppi@hotmail.com' || email == 'danilo.zoppi@gmail.com' || email == 'Vpugliero@gmail.com' || email == 'teste@hotmail.com' || email == 'teste2@hotmail.com' || email == 'igornicolas33@gmail.com') { */
      if (name.length > 0 && email.length > 0 && password.length > 0 && password.length >= 6) {
        setIsLoading(true);
        await defaultSignUpUser({ email, password });

        setIsLoading(false);
      } else {
        Toast.show({
          text1: 'Preencha todos os campos',
          type: 'error'
        });
      }
      /* } */
    } catch (err) {
      console.log('error while siging up:', err);
    }

  }

  return (
    <>
      <Container>
        <CoverBackground
          resizeMode="cover"
          source={require('../../assets/img/swimmerBackground.png')}>
        </CoverBackground>


        <ModalBackground>
          <KeyboardAvoidingView behavior="height" >
            <ModalContainer>
              <LoginText>Nova conta</LoginText>
              <View style={{ marginVertical: 10 }}>
                <InputTitle>Seu nome</InputTitle>
                <InputComponent onChangeText={(text) => setName(text)}
                  placeholder="Jonh Doe" />
              </View>
              <View style={{ marginBottom: 10 }}>
                <InputTitle>Seu email</InputTitle>
                <InputComponent onChangeText={(text) => setEmail(text)}
                  placeholder="email@email.com" />
              </View>
              <View style={{ marginBottom: 10 }}>
                <InputTitle>Digite uma senha</InputTitle>
                <InputComponent
                  onChangeText={(text) => setPassword(text)}
                  placeholder="Senha secreta"
                  password
                  icon="eye"
                  iconColor="#B5B5B5"
                  secureTextEntry
                />
              </View>
              <ButtonComponent
                style={{ marginTop: 10 }}
                buttonText="Criar conta"
                textColor="white"
                isLoading={isLoading}
                onPressButton={() => handleSingUp()}
              />
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}
                onPress={() => navigate('SignIn')}>
                <MediumText>Já possui uma conta?  </MediumText>
                <BoldText>Logar</BoldText>
              </TouchableOpacity >
            </ModalContainer>
          </KeyboardAvoidingView>
        </ModalBackground>
      </Container>
    </>
  );
};

export default SignUp;
