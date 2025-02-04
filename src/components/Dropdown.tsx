import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import InputGroup from './InputGroup';

export default ({ value, items, onClick, showSearch = false }: { value?: string | null, items: string[], onClick: (value: string) => void, showSearch?: boolean }) => {
  const [query, setQuery] = useState('');
  const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

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
            <MenuItem key={item}>
              <div
                className={`px-4 py-2 hover:bg-gray-400/20 transition min-w-48 hover:cursor-pointer ${item === value ? 'bg-teal-100 hover:bg-teal-200' : ''}`}
                onClick={() => onClick(item)}
              >
                {item}
              </div>
            </MenuItem>
          ))
        }
      </MenuItems>
    </Menu>
  )
}