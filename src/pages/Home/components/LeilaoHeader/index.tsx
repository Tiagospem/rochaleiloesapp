import React from 'react';
import {Header, Title, SubTitle, Local, Icon} from './styles';

import {LeilaoDataType} from '../../../Definitions';

interface LeilaoProps {
  leilao: LeilaoDataType;
}

export const LeilaoHeader: React.FC<LeilaoProps> = ({leilao}) => (
  <Header>
    <Title>
      <Icon name="map-pin" size={18} /> {leilao.cidade.nome} - {leilao.uf.sigla}
    </Title>
    <SubTitle>{leilao.comitente.nome}</SubTitle>
    <Local numberOfLines={1} ellipsizeMode="tail">
      Local do leilão: {leilao.local}
    </Local>
  </Header>
);

export default LeilaoHeader;
