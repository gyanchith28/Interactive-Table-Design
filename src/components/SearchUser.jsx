import React, { useState } from 'react';
import { FormControl, Input } from '@chakra-ui/react';

export default function SearchUser({ onSearch }) {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <FormControl>
        <Input
          placeholder="Search"
          size="lg"
          onChange={handleSearchChange}
        />
      </FormControl>
    </div>
  );
}
