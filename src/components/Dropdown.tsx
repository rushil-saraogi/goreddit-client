import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface DropdownItem {
    title: string;
    id: string | number;
}

export default ({ value, items, onClick }: { value?: string, items: DropdownItem[], onClick: (value: string) => void }) => {
  return (
    <Menu>
      <MenuButton className="block bg-gray-400/10 w-full border-gray-300 rounded-md h-11 border hover:bg-gray-400/20 transition">{value ?? 'Select a value'}</MenuButton>
      <MenuItems
        anchor="bottom end"
        className="bg-white border border-gray-200 rounded-lg text-gray-800 [--anchor-gap:4px] sm:[--anchor-gap:8px]"
      >
        {
            items.map((item) => (
                <MenuItem key={item.id}>
                    <div
                      className={`px-4 py-2 hover:bg-gray-400/20 transition min-w-48 hover:cursor-pointer ${item.title === value ? 'bg-teal-100 hover:bg-teal-200' : ''}`}
                      onClick={() => onClick(item.title)}
                    >
                      {item.title}
                    </div>
                </MenuItem>
            ))
        }
      </MenuItems>
    </Menu>
  )
}