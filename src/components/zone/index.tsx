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
  let backgroundColor = 'rgb(203 213 225)'
  if (isActive) {
    backgroundColor = 'rgb(241 245 249)'
  } else if (canDrop) {
    backgroundColor = 'rgb(248 250 252)'
  }

  return (
    <div
      className={`border border-dotted border-black bg-slate-300 p-4 rounded-lg flex md:flex-row flex-col justify-center items-center w-full ${
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
