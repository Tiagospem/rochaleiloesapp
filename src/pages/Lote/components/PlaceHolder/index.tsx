import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Container} from './styles';

const PlaceHolder: React.FC = (props) => {
  return (
    <Container>
      <ContentLoader
        style={{width: '100%'}}
        speed={0.5}
        height={420}
        viewBox={'0 0 400 420'}
        backgroundColor="#ccc"
        foregroundColor="#f1f1f1"
        {...props}>
        <Rect x="0" y="5" rx="3" ry="3" width="300" height="15" />
        <Rect x="0" y="60" rx="10" ry="10" width="100%" height="250" />
        <Rect x="0" y="26" rx="3" ry="3" width="148" height="11" />
        <Rect x="0" y="43" rx="3" ry="3" width="148" height="11" />
        <Rect x="0" y="320" rx="3" ry="3" width="300" height="11" />
        <Rect x="0" y="340" rx="3" ry="3" width="148" height="11" />
      </ContentLoader>
    </Container>
  );
};

export default PlaceHolder;
