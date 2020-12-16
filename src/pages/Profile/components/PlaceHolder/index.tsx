import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Container} from './styles';

const PlaceHolder: React.FC = (props) => {
  return (
    <Container>
      <ContentLoader
        style={{width: '100%'}}
        speed={0.5}
        height={920}
        viewBox={'0 0 400 920'}
        backgroundColor="#ccc"
        foregroundColor="#f1f1f1"
        {...props}>
        <Rect x="0" y="5" rx="3" ry="3" width="300" height="25" />
        <Rect x="0" y="40" rx="3" ry="3" width="248" height="15" />
        <Rect x="0" y="65" rx="3" ry="3" width="100%" height="11" />
        <Rect x="0" y="85" rx="3" ry="3" width="20%" height="11" />
        <Rect x="0" y="105" rx="3" ry="3" width="90%" height="11" />
        <Rect x="0" y="125" rx="3" ry="3" width="100%" height="11" />
        <Rect x="0" y="145" rx="3" ry="3" width="50%" height="11" />
        <Rect x="0" y="165" rx="3" ry="3" width="96%" height="11" />
        <Rect x="0" y="185" rx="3" ry="3" width="30%" height="11" />
      </ContentLoader>
    </Container>
  );
};

export default PlaceHolder;
