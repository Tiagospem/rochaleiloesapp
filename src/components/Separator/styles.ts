import styled from 'styled-components/native';

interface SeparatorProps {
  color?: string;
}

export const Separator = styled.View<SeparatorProps>`
  height: 1px;
  background-color: ${(props) => (props.color ? props.color : '#eeeeee')};
`;
