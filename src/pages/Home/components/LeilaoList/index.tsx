import React from 'react';
import {List, ContainerSingle, ContainerList, Wrapper} from './styles';

import {LeilaoDataType} from '../../../Definitions';

import LeilaoCard from '../LeilaoCard';
import LeilaoHeader from '../LeilaoHeader';

interface LeilaoListProps {
  leilao: LeilaoDataType;
}
const LeilaoList: React.FC<LeilaoListProps> = ({leilao}) => {
  return leilao.lotes.length > 1 ? (
    <Wrapper>
      <LeilaoHeader leilao={leilao} />
      <List>
        {leilao.lotes.map((lote) => (
          <ContainerList key={lote.id}>
            <LeilaoCard leilao={leilao} lote={lote} />
          </ContainerList>
        ))}
      </List>
    </Wrapper>
  ) : (
    <Wrapper>
      <LeilaoHeader leilao={leilao} />
      <ContainerSingle>
        <LeilaoCard leilao={leilao} lote={leilao.lotes[0]} />
      </ContainerSingle>
    </Wrapper>
  );
};

/*
const LeilaoList: React.FC<LeilaoListProps> = ({leilao}) => (
  <Wrapper>
    <LeilaoHeader leilao={leilao} />
    <ContainerSingle>
      <LeilaoCard leilao={leilao} lote={leilao.lotes[0]} />
    </ContainerSingle>
  </Wrapper>
);
*/

export default LeilaoList;
