import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/SignButton';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth/AuthContext';

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
  SocialMediaButton,
  MediumText,
  BoldText,
} from './styles';

const SignIn = () => {
  const { navigate } = useNavigation();

  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { defaultSignIn } = useAuth();

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

  const handleSignIn = async () => {

    if (email.length > 0 && password.length > 0) {
      setIsLoading(true);
      await defaultSignIn({ email, password });
      setIsLoading(false);
      /* if (response) {
        
       const isNewUser = response.additionalUserInfo?.isNewUser;
         if (questionsNotAnswered) {
          navigate('Introdution', {
            title: 'Conta pra gente',
            subtitle: 'Antes de começarmos precisamos conhecer um pouco mais sobre você e sua prova alvo.',
            buttonText: 'Vamos lá',
            gradientColors: [
              'rgba(37, 42, 72, 0)',
              'rgba(37, 42, 72, 0.6)',
              'rgb(37, 42, 72)',
              'rgb(37, 42, 72)'],
            navigateTo: 'Question1',
            backgroundImage: require('../../assets/img/questionsBaackground.png')
          });
        } else {
          navigate('Home');
        } 

      } else {
        setIsLoading(false);
      }*/

    } else {
      Toast.show({
        text1: 'Preencha todos os campos!',
        type: 'error'
      });
    }
  }

  return (
    <>
      <Container>
        <Banner
          resizeMode="cover"
          source={require('../../assets/img/swimmerBackground.png')}
        />
        <ModalBackground>
          <ModalContainer>
            <LoginText>Conta Xtreme</LoginText>
            <View style={{ marginVertical: 10 }}>
              <InputTitle>Seu email</InputTitle>
              <InputComponent placeholder="email@email.com"
                onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <InputTitle>Digite sua senha</InputTitle>
              <InputComponent
                placeholder="Senha secreta"
                icon="eye"
                iconColor="#B5B5B5"
                password
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <TouchableOpacity onPress={() => navigate('RecoverPassword')}>
              <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
            </TouchableOpacity >
            <View style={{ marginBottom: -8, marginTop: 6 }}>
              <ButtonComponent
                style={{ marginTop: 4 }}
                buttonText="Entrar na minha conta"
                textColor="white"
                isLoading={isLoading}
                onPressButton={() => handleSignIn()}
              />
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}
                onPress={() => navigate('SignUp')}>
                <MediumText>Não possui uma conta?  </MediumText>
                <BoldText>Cadastre-se</BoldText>
              </TouchableOpacity >
            </View>
          </ModalContainer>
        </ModalBackground>
      </Container>
    </>
  );
};

export default SignIn;
