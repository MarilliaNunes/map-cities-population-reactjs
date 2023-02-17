import React from 'react';
import * as Label from '@radix-ui/react-label';
import './label.css';

type LabelDemoProps = {
  hasInput: boolean
  label: string
  inputValue?: string
}

export function LabelDemo ({ hasInput, label, inputValue }: LabelDemoProps){
  return(
    <div style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}>
      <Label.Root className="LabelRoot" htmlFor={label}>
        {label}
      </Label.Root>
      {hasInput ? <input className="Input" type="text" id={label} disabled></input> : <div></div>}
    </div>
  );
}

