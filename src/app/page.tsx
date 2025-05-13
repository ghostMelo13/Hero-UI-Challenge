"use client"
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  const [mainClick, setMainClick] = useState(false);
  const sideMenuRef = useRef(null);
  const menuBtnRef = useRef(null);
  
  useEffect(() => {
    const handleClick = (e: any) => {
      if(window.innerWidth < 1024){
        console.log("eve", e.target, window.innerWidth);
        if (!menuBtnRef?.current.contains(e.target)) {
          if (!sideMenuRef?.current?.contains(e.target)) {
            console.log("Closingggg")
            setSideMenuToggle(false);
          }
        }
      }
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [])

  const onClickToggleSideMenu = () => {
    setSideMenuToggle(!sideMenuToggle);
  }
  const closeSideMenu = () => {
    setSideMenuToggle(false);
  }

  return (
    // p-8 pb-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)]
    <div className="relative flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <aside id="sidebar-multi-level-sidebar" className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] ${sideMenuToggle ? 'w-full' : 'w-0'} overflow-hidden transition-all duration-300 lg:max-w-[224px] lg:pointer-events-auto ${sideMenuToggle ? 'opacity-100' : 'opacity-0 lg:opacity-100'}  ${sideMenuToggle ? 'pointer-events-auto' : 'pointer-events-none'} ${sideMenuToggle ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
        <div id="sidebar-contents" ref={sideMenuRef} className={`relative h-[100dvh] text-[#fff] max-w-[224px] mr-auto px-2 py-4 transition-transform duration-300 ease-in-out flex flex-col gap-4 overflow-y-auto bg-[#1E2640] dark:bg-gray-800`}>
          <div className="flex gap-3 text-[#fff] items-center mx-auto w-[94%]">
            <button onClick={closeSideMenu} className="p-1 rounded-lg hover:bg-neutral-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 10H11.5" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.5 14H10.5" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15 3L15 13M15 17L15 21" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="ml-auto">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
          </div>
          <ul className="space-y-2 font-medium">
                <li>
                  <a target="_blank" className="flex items-center p-2 text-gray-100 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">doiajniodnwbuiojefwa</span>
                  </a>
                </li>
          </ul>
        </div>
      </aside>
      
      <div className="flex-1 w-full border border-red-200">
        <header className="flex border-b border-[#e1e1e1] dark:border-[#373737] justify-between items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3">
          <button onClick={onClickToggleSideMenu} ref={menuBtnRef} >-menu-</button>
          <ThemeSwitcher />
        </header>
      </div>
    </div>
  );
}
