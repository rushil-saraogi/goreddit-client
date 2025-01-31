import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import InputGroup from '@/components/InputGroup'
import { Product } from '@/types/Product'
import IconButton from '@/components/IconButton'

export default function ProductSelectionModal({
  isOpen,
  onClose,
  onSelect,
  products,
  selectedProducts
}: {
  isOpen: boolean,
  onClose: () => void,
  onSelect: (product: Product) => void,
  products: Product[],
  selectedProducts: Product[]
}) {
  const [search, setSearch] = useState('')
  products = products.filter((product) => product.Name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Dialog open={isOpen} as="div" className="text-gray-800 relative z-10 focus:outline-none" onClose={onClose}>
        <DialogBackdrop className="fixed inset-0 bg-black/40" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Select
              </DialogTitle>

              <div className='mt-4'>
                <InputGroup value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" className='mb-4' />
                {
                  products.map((product) => (
                    <div key={product.ID} className="flex items-center justify-between p-2 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        {
                          product.Thumbnail && (
                            <img src={product.Thumbnail} alt={product.Name} className="w-10 h-10 object-cover rounded-lg" />
                          )
                        }
                        <div>
                          <div className="text-sm/5">{product.Name}</div>
                          <div className="text-sm/5 text-gray-500">{product.Reference}</div>
                        </div>
                      </div>
                      {
                        selectedProducts.some((selectedProduct) => selectedProduct.ID === product.ID) && (
                          <IconButton icon="check_circle" type="success" onClick={() => onSelect(product)} />
                        )
                      }
                      {
                        !selectedProducts.some((selectedProduct) => selectedProduct.ID === product.ID) && (
                          <IconButton icon="add" onClick={() => onSelect(product)} />
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}