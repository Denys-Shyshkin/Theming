import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

import { LoaderContainer } from './styles';

function Loader() {
  return (
    <LoaderContainer>
      <BounceLoader color="#2b6778" size={120} />
    </LoaderContainer>
  );
}

export default Loader;
