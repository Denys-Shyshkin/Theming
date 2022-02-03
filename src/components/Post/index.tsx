import React from 'react';
import { Coffee } from '@styled-icons/material';

import { cupsOfCoffee } from '../../helpers';
import { MINS_PER_CUP } from '../../helpers/constants';
import { ReadTimeContainer, ReadTimeText } from './styles';

interface Props {
  title: string;
  body: string;
}

function Post({ title, body }: Props) {
  const cups = cupsOfCoffee(body);
  const cupsArray = Array(cups).fill(<Coffee size={20} />);

  return (
    <div>
      <h5>{title}</h5>
      <ReadTimeContainer>
        {cupsArray.map((cup, index) => (
          <span key={index}>{cup}</span>
        ))}
        <ReadTimeText>{cups * MINS_PER_CUP} mins read</ReadTimeText>
      </ReadTimeContainer>
      <p>{body}</p>
    </div>
  );
}

export default Post;
