import React from 'react';
import Switch from 'react-switch';
import { ModeNight, WbSunny } from '@styled-icons/material';
import { IconStyleWrapper } from './styles';

interface Props {
  checked: boolean;
  changeHandler: () => void;
}

function SwitchToggle({ checked, changeHandler }: Props) {
  return (
    <IconStyleWrapper>
      <Switch
        onChange={changeHandler}
        checked={checked}
        height={26}
        offColor="#24292d"
        onColor="#ffffff"
        onHandleColor="#24292d"
        uncheckedIcon={<ModeNight color="#ffffff" size={20} />}
        checkedIcon={<WbSunny color="#24292d" size={20} />}
      />
    </IconStyleWrapper>
  );
}

export default SwitchToggle;
