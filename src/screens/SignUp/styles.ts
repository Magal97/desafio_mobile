import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const xtremeBlueDark = ({ theme }: any) => theme.xtremeBlueDark;
const xtremeWhite = ({ theme }: any) => theme.xtremeWhite;
const xtremeBlue = ({ theme }: any) => theme.xtremeBlue;
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
  position: absolute;
  border-radius: 36px;
  top: ${HEIGHT - 472}px;
  right: 10%;
  align-items: center;
  justify-content: center;
  background-color: ${xtremeBlue};
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: ${xtremeWhite};
  margin-left: 10px;
  position: absolute;
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
  font-family: 'Rubik-Medium';
  font-size: 24px;
  color: ${xtremeBlueDark};
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
  margin: 6px 0;
  color: ${xtremeBlue};
  align-self: center;
`;


export const TitleRow = styled.View`
  flex-direction: row;
  margin-top: -110%;
  align-items: center;
  margin-left: 10px;
  margin-right: 30px;

  ${(props) => props.isOpen && css`
      margin-top: -130%;
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

export const CoverBackground = styled.ImageBackground`
  width: 100%;
  height: 55%;
  justify-content: center;
`;