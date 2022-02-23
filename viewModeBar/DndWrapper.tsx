import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import ViewModeBar from "./ViewModeBar"

interface IDndWrapper {
    setTimeLineMode: React.Dispatch<React.SetStateAction<string>>
}

const DndWrapper = ({setTimeLineMode}: IDndWrapper) => {
    return <DndProvider backend={HTML5Backend}>
        <ViewModeBar setTimeLineMode={setTimeLineMode}/>
    </DndProvider>
}

export default DndWrapper;