import React from 'react';

export default function Option({ country }) {
  return (
    <option value={country.value}>{country}</option>
  )
}
