import React, { useState } from 'react';
import { DropDownSelectedStyle } from './dropDownMenuStyled';
// import { DropDownMenuContainer } from './dropDownMenuStyled';


export default function DropdownMenu({ filter }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      filter(event.target.value);
  }

  return (
    <div>
      <DropDownSelectedStyle value={selectedOption} onChange={handleSelectChange}>
        <option value="">all</option>
        <option value="follow">follow</option>
        <option value="followings">followings</option>
      </DropDownSelectedStyle>
    </div>
  );
}
