import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './dropdown-select.css';
import { getNeighborhoodProperties } from '../../../infra';

type SelectItemProps = {
  value: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((
  { children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

type SelectDemoProps = {
  neighborhoodIds: number[]
  selectedNeighborhood: number
  setSelectedNeighborhood:React.Dispatch<React.SetStateAction<number>>
}

export function DropdownSelect({neighborhoodIds, selectedNeighborhood, setSelectedNeighborhood}: SelectDemoProps) {
  const neighborhoodProperties = neighborhoodIds.map((id) => getNeighborhoodProperties(id))

  return(
    <Select.Root
      onValueChange={(value)=>{
        setSelectedNeighborhood(Number(value))
      }}
    >
      <Select.Trigger className="SelectTrigger" aria-label="Neighborhood">
      <Select.Value>
        {selectedNeighborhood === 0 ? 'Selecione um bairro' : neighborhoodProperties.find(n => n.id === selectedNeighborhood)?.name} 
      </Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
            {
              neighborhoodProperties.map((neighborhood)=>{
              return <SelectItem key={neighborhood.id} value={`${neighborhood.id}`}>{neighborhood.name}</SelectItem>
              })
            }
            </Select.Group>

          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}





