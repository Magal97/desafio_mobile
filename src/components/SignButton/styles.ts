import styled from 'styled-components/native';

const xtremeBlueDark = ({theme}: Themes) => theme.xtremeBlueDark;
const xtremeWhite = ({theme}: Themes) => theme.xtremeWhite;

interface Themes {
  theme: any;
}

export const Container = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${xtremeBlueDark};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Medium';
  color: ${xtremeWhite};
`;
