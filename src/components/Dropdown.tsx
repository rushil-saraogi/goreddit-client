import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import InputGroup from './InputGroup';

interface DropdownItem {
  Name: string;
  ID: string | number;
}

export default ({ value, items, onClick, showSearch = false }: { value?: string | null, items: DropdownItem[], onClick: (value: string) => void, showSearch?: boolean }) => {
  const [query, setQuery] = useState('');
  const filteredItems = items.filter((item) => item.Name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Menu>
      <MenuButton className="block bg-gray-400/10 w-full border-gray-300 rounded-md h-11 border hover:bg-gray-400/20 transition">{value ?? 'Select a value'}</MenuButton>
      <MenuItems
        anchor="bottom end"
        className="bg-white border border-gray-200 rounded-lg text-gray-800 [--anchor-gap:4px] sm:[--anchor-gap:8px]"
      >
        {
          showSearch && (
            <div className='p-4 pb-2'>
              <InputGroup value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          )
        }
        {
          filteredItems.map((item) => (
            <MenuItem key={item.ID}>
              <div
                className={`px-4 py-2 hover:bg-gray-400/20 transition min-w-48 hover:cursor-pointer ${item.Name === value ? 'bg-teal-100 hover:bg-teal-200' : ''}`}
                onClick={() => onClick(item.Name)}
              >
                {item.Name}
              </div>
            </MenuItem>
          ))
        }
      </MenuItems>
    </Menu>
  )
}