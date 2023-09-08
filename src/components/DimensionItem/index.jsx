import React from 'react';
import Input from '../Input';

export default function DimensionItem({ type, name, unit }) {
  return (
    <div>
      <label for={name}>{name}:</label>
      <Input type={type} name={name} placeholder={unit} autoComplete="off" />
    </div>
  )
}
