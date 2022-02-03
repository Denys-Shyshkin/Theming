import React from 'react';

import { ErrorContainer, ErrorText } from './styles';

function Error() {
  return (
    <ErrorContainer>
      <ErrorText>Something went wrong...</ErrorText>
      <ErrorText>Try to reload the page</ErrorText>
      <button type="button" onClick={() => document.location.reload()}>
        Reload
      </button>
    </ErrorContainer>
  );
}

export default Error;
