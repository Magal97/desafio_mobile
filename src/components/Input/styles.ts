import styled from 'styled-components/native';

const xtremeGray = ({theme}: any) => theme.xtremeGray;

export const Container = styled.View`
  height: 50px;
  padding: 0 8px 0 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #B2BECF;
`;

export const TextInput = styled.TextInput`
  font-family: 'OpenSans-SemiBold';
  font-size: 14px;
  color: #505050;
  flex: 1;
`;
