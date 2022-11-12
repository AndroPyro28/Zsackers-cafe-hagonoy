import { useState } from 'react'
import InventoryLeftContent from '../../../components/inventory/InventoryLeftContent'
import InventoryRightContent from '../../../components/inventory/InventoryRightContent'
import {GlobalStyles, InventoryLayout} from "./components"

function Inventory() {
  const [searchName, setSearchName] = useState('');
  return (
    <InventoryLayout>
        <GlobalStyles />
        <InventoryLeftContent setSearchName={setSearchName}/>
        <InventoryRightContent searchName={searchName}/>
    </InventoryLayout>
  )
}

export default Inventory