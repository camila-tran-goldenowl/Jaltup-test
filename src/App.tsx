import React, { ReactElement, useState } from 'react'
import './App.css'
import Zone from './components/zone'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { WidgetType } from './constants'

function App(): ReactElement {
  const [widgetType, setWidgetType] = useState<WidgetType>('small')
  return (
    <div className="bg-gray-950">
      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-10">
          <Zone
            onDrop={() => setWidgetType('small')}
            isLarge={false}
            widgetType={widgetType}
          />
          <Zone
            onDrop={() => setWidgetType('large')}
            isLarge={true}
            widgetType={widgetType}
          />
        </div>
      </DndProvider>
    </div>
  )
}

export default App
