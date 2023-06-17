import React from 'react'
import { DrawerProps } from '../types'


const Drawer = ({setCartOpen,cartOpen }: DrawerProps ) => {
  return (
    <div className="w-40 h-full flex justify-end bg-black" onClick={() => setCartOpen(false)}>
  drawer
</div>
  )
}

export default Drawer