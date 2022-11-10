import InventoryLeftContent from '../../../components/inventory/InventoryLeftContent'
import InventoryRightContent from '../../../components/inventory/InventoryRightContent'
import {GlobalStyles, InventoryLayout} from "./components"

function Inventory() {
  return (
    <InventoryLayout>
        <GlobalStyles />
        <InventoryLeftContent />
        <InventoryRightContent />
    </InventoryLayout>
  )
}

export default Inventory