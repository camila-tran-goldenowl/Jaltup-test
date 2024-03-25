import { useDrop } from 'react-dnd'

import FacebookWidget from '../widgets/index'
import { WIDGET_TYPES, WidgetType } from '../../constants'

interface IZoneProps {
  onDrop: () => void
  isLarge?: boolean
  widgetType: WidgetType
}

const Zone = ({
  onDrop,
  isLarge = false,
  widgetType
}: IZoneProps): JSX.Element => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'fb-widget',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  const isActive = canDrop && isOver
  let backgroundColor = 'rgba(225,225,225,255)'
  if (isActive) {
    backgroundColor = 'rgba(225,225,225, 0.6)'
  } else if (canDrop) {
    backgroundColor = 'rgba(225,225,225, 0.7)'
  }

  return (
    <div
      className={`border border-dotted border-black bg-slate-300 p-4 rounded-3xl flex md:flex-row flex-col justify-center items-center w-full min-w-min min-h-14 ${
        isLarge
          ? 'md:w-[700px] min-h-[300px]'
          : 'md:w-[300px] flex justify-center items-center min-h-[200px]'
      }`}
      ref={drop}
      style={{ backgroundColor }}
    >
      {widgetType === WIDGET_TYPES.large && isLarge && (
        <FacebookWidget type={WIDGET_TYPES.large} />
      )}
      {widgetType === WIDGET_TYPES.small && !isLarge && (
        <FacebookWidget type={WIDGET_TYPES.small} />
      )}
    </div>
  )
}

export default Zone
