import { Dimensions, KeyboardAvoidingView } from 'react-native';
import styled, { css } from 'styled-components/native';

const xtremeBlueDark = ({ theme }: any) => theme.xtremeBlueDark;
const xtremeWhite = ({ theme }: any) => theme.xtremeWhite;
const xtremeBlue = ({ theme }: any) => theme.xtremeBlue;
const xtremeBlackMedium = ({ theme }: any) => theme.xtremeBlackMedium;
const xtremeGray = ({ theme }: any) => theme.xtremeGray;

const HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  background-color: ${xtremeBlueDark};
  flex: 1;
`;

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 65%;
`;

export const TransparentLogo = styled.Image`
  position: absolute;
  top: 30px;
`;

export const AbsoluteButton = styled.View`
  width: 62px;
  height: 62px;
  z-index: 3;
  align-self: flex-end;
  border-radius: 36px;
  right: 10%;
  align-items: center;
  justify-content: center;
  background-color: ${xtremeBlue};
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #FAFAFA;
  margin-top: -20px;  
  
`;

export const ModalBackground = styled.View`
  position: absolute;
  width: 100%;
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: 0;
  background-color: ${xtremeWhite};
  padding-top: 40px;
  padding-bottom: 10px;
`;

export const ModalContainer = styled.View`
  width: 100%;
  padding: 0 20px 10px 20px;
`;

export const LoginText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: ${xtremeBlueDark};
  margin-bottom: 10px;
`;

export const InputTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-bottom: 6px;
  color: ${xtremeBlueDark};
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  margin-bottom: 14px;
  color: #6B8C96;
  align-self: flex-end;
`;

export const OrText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-bottom: 6px;
  padding: 0 10px;
  color: ${xtremeBlueDark};
`;

export const SocialMediaButton = styled.TouchableOpacity.attrs({
  opacity: 0.8,
})`
  height: 40px;
  width: 115px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${xtremeBlackMedium};
  border-radius: 8px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -66%;
  margin-left: 18px;
  margin-right: 30px;

  ${(props) => props.isOpen && css`
      margin-top: -100%;
  `};
`;

export const MediumText = styled.Text`
  font-family: 'Roboto-Medium'; 
  font-size: 14px;
  color: ${xtremeGray};

`;


export const BoldText = styled.Text`
  font-family: 'Roboto-Bold'; 
  font-size: 14px;
  color: ${xtremeBlue};

`;

