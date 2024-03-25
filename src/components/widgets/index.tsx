import { useDrag } from 'react-dnd'
import facebookLogo from '../../assets/logos/fb.png'
import thumbnail1 from '../../assets/images/thumb1.jpeg'
import thumbnail2 from '../../assets/images/thumb2.jpeg'
import thumbnail3 from '../../assets/images/thumb3.jpeg'
import thumbnail4 from '../../assets/images/thumb4.jpeg'
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
      <div className="flex md:gap-10 gap-14 justify-between">
        <div className="flex flex-col justify-between">
          <div className="">
            <img src={facebookLogo} alt="facebook logo" className="w-12" />
            <p className="text-black font-bold font-base mt-4">Facebook</p>
          </div>

          <button className="bg-[#1877F2] rounded-[20px] py-2 px-4 text-white md:text-base text-sm">
            Follow 6.5K
          </button>
        </div>
        {type === 'large' && (
          <div className="flex flex-wrap gap-4 max-w-xs">
            <img
              src={thumbnail1}
              alt="image 1"
              className="rounded-lg h-20 w-32"
            />
            <img
              src={thumbnail2}
              alt="image 2"
              className="rounded-lg h-20 w-32"
            />
            <img
              src={thumbnail3}
              alt="image 3"
              className="md:block hidden rounded-lg h-20 w-32"
            />
            <img
              src={thumbnail4}
              alt="image 4"
              className="md:block hidden rounded-lg h-20 w-32"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FacebookWidget
