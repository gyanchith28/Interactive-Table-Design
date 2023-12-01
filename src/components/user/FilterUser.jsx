import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function FilterUser() {
  const [selectedOption, setSelectedOption] = useState('Last Week');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    // You can perform additional actions here based on the selected option
  };

  const options = ['Last Week', 'Last Month', 'Last 3 Months', 'All'];

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          rightIcon={<ChevronDownIcon />}
        >
          {selectedOption}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue={selectedOption}
            type="radio"
            onChange={handleOptionSelect}
          >
            {options.map((option) => (
              <MenuItemOption key={option} value={option}>
                {option}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </div>
  );
}
