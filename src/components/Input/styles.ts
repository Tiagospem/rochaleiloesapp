import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ececec;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border: 2px solid transparent;
  color: #201e1e;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #333;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
  font-family: 'AirbnbCereal-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
