import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

export default function Loader(params) {

  return(

    <div className='m-auto'>
      <Ring
      size="45"
      stroke="3"
      bgOpacity="0"
      speed="2.5"
      color="rgb(79,57,246)" 
      />
    </div>
  )
}
