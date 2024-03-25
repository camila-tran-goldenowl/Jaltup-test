import React, { ReactElement, useState } from 'react'
import './App.css'
import Zone from './components/zone'

import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DndProvider } from 'react-dnd'

import { WidgetType } from './constants'

function App(): ReactElement {
  const [widgetType, setWidgetType] = useState<WidgetType>('small')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  const Backend = isMobile ? TouchBackend : HTML5Backend

  return (
    <div className="p-4">
      <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
        <div className="flex flex-col md:flex-row gap-10">
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
