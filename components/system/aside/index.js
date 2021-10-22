import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import InfoAside from './models/infoaside'
import Search from './models/search'

export default function Aside () {
  const [activeMenu, setActiveMenu] = useState('main')

  // if (typeof window !== 'undefined') {
  //   navigator.geolocation.watchPosition(function showPosition (position) {
  //     console.log(position.coords.latitude, position.coords.longitude)
  //   })
  // }

  return (
    <aside className="w-full lg:w-1/4 h-screen bg-white dark:bg-morado-azulado overflow-hidden lg:relative overflow-y-auto style_sidenavScrollbar__3m transition duration-300">
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        >
          <InfoAside handleFunction={() => { setActiveMenu('settings') }}/>
        </CSSTransition>
        <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        >
          <Search handleFunction={() => { setActiveMenu('main') }}/>
        </CSSTransition>
    </aside>
  )
}
