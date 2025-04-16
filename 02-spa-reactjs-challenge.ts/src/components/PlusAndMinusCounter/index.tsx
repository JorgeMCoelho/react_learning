import { Minus, Plus} from "phosphor-react"
import { CoffeActionsPlusAndMinus } from "./styles"

export function PlusAndMinusCounter() {
    return(
        <CoffeActionsPlusAndMinus>
            <Minus size={14} />
            1
            <Plus size={14} />
        </CoffeActionsPlusAndMinus>
        
    )
}