import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'
import { sideMenuItems } from './sidebar-menu-data'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function SideBar(props: Props) {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false)

  function handleToggleSideMenu(): void {
    setOpenSideMenu(!openSideMenu)
  }
  return (
    <>
      <Navbar handleToggleSideMenu={handleToggleSideMenu} />
      <aside
        className={
          openSideMenu
            ? 'translate-x-0 fixed top-0 left-0' +
              ' z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
            : 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sideMenuItems.map((item, index) => {
              const { label, link, Icon } = item
              return (
                <li key={index}>
                  <NavLink
                    to={`/admin/${link}`}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    )}
                    <span className="ms-3 capitalize">{label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
      {props.children}
    </>
  )
}
