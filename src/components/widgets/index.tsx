import { useDrag } from 'react-dnd'
import facebookLogo from '../../assets/logos/fb.png'
import thumbnail from '../../assets/images/thumbnail.png'

import { WIDGET_TYPES, WidgetType } from '../../constants'

interface IFacebookWidgetsProps {
  type: WidgetType
}
const FacebookWidget = ({ type }: IFacebookWidgetsProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'fb-widget',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }))

  const opacity = isDragging ? 0.4 : 1
  const containerClassName = type === WIDGET_TYPES.small ? 'w-52' : ''

  return (
    <div
      className={`rounded-lg bg-white h-52 p-4 flex cursor-pointer ${containerClassName}`}
      ref={drag}
      style={{ opacity }}
    >
      <div className="flex gap-10 justify-between">
        <div className="flex flex-col justify-between">
          <div className="">
            <img src={facebookLogo} alt="facebook logo" className="w-12" />
            <p className="text-black font-bold font-base mt-4">Facebook</p>
          </div>

          <button className="bg-[#1877F2] rounded-[20px] py-2 px-4 text-white">
            Follow 6.5K
          </button>
        </div>
        {type === 'large' && (
          <div className="flex flex-wrap gap-4 max-w-xs">
            <img src={thumbnail} alt="image 1" className="rounded-lg h-20" />
            <img src={thumbnail} alt="image 2" className="rounded-lg h-20" />
            <img src={thumbnail} alt="image 3" className="rounded-lg h-20" />
            <img src={thumbnail} alt="image 4" className="rounded-lg h-20" />
          </div>
        )}
      </div>
    </div>
  )
}

export default FacebookWidget