"use client"
import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon, AttachmentIcon, BlubIcon, GlobeIcon, NewChatIcon, SearchIcon } from "@/components/custom/icons";
import BgFadedDropdown from '@/components/ui/FadedDropdown';
import { Button } from "@heroui/react";
import BlurredFooterCard from "@/components/ui/card";
import DropdownWithIcons from "@/components/ui/IconsDropdown";

export default function Home() {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (window.innerWidth < 1024) {
        console.log("eve", e.target, window.innerWidth);
        if (menuBtnRef.current && !menuBtnRef?.current.contains(e.target as Node)) {
          if (sideMenuRef.current && !sideMenuRef?.current?.contains(e.target as Node)) {
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

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 240);
      // Set the height to scrollHeight to fit content
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = textarea.scrollHeight > 240 ? 'auto' : 'hidden';
    }
  };

  // Handle keydown for Enter press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Handle send message here if needed
    }
    // Resize on any keydown to handle deletions
    autoResize();
  };

  // Handle input for any text changes
  const handleInput = () => {
    autoResize();
  };


  return (
    // p-8 pb-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)]
    <div className="relative flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <aside id="sidebar-multi-level-sidebar" className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] ${sideMenuToggle ? 'w-full' : 'w-0'} overflow-hidden transition-all duration-300 lg:max-w-[224px] lg:pointer-events-auto ${sideMenuToggle ? 'opacity-100' : 'opacity-0 lg:opacity-100'}  ${sideMenuToggle ? 'pointer-events-auto' : 'pointer-events-none'} ${sideMenuToggle ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
        <div id="sidebar-contents" ref={sideMenuRef} className={`relative h-[100dvh] text-[#fff] max-w-[224px] mr-auto px-2 py-4 transition-transform duration-300 ease-in-out flex flex-col gap-4 overflow-y-auto bg-[#EDEDED] dark:bg-[#0A0A0A] border-r border-[#D4D4D4] dark:border-[#3D3D3D]`}>
          <div className="flex gap-3 text-[#fff] items-center mx-auto w-[94%]">
            <button onClick={closeSideMenu} className="p-2 rounded-lg hover:bg-[var(--btnHover)] dark:hover:bg-[var(--darkBtnHover)] cursor-pointer">
              <svg className="text-[#1D1C1B] dark:text-[#F3F3F3]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 10H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6.5 14H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M15 3L15 13M15 17L15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="ml-auto flex gap-1">
              <div className="p-2 rounded-lg text-neutral-200 hover:bg-[var(--btnHover)] dark:hover:bg-[var(--darkBtnHover)]">
                <SearchIcon className="text-[var(--iconColor)] dark:text-[var(--darkIconColor)]" />
              </div>
              <div className="p-2 rounded-lg text-neutral-200 hover:bg-[var(--btnHover)] dark:hover:bg-[var(--darkBtnHover)]">
                <NewChatIcon className="text-[var(--iconColor)] dark:text-[var(--darkIconColor)]" />
              </div>
            </div>
          </div>
          <h3 className="text-sm font-medium text-black dark:text-white mt-20 ms-3">Previous 30 days</h3>
          <ul className=" font-medium">
            <li>
              <a target="_blank" className="group flex text-sm items-center py-2 text-[#414141] dark:hover:bg-zinc-900 hover:bg-zinc-300 rounded-lg dark:text-white group cursor-pointer">
                <span className="ms-3">Blog Page UI Design</span>
                <DropdownWithIcons />
              </a>
            </li>
          </ul>
          <BlurredFooterCard className="mt-auto" />

        </div>
      </aside>

      <section className="flex-1 flex flex-col w-full">
        <header className="border-b border-zinc-800 flex items-center !gap-[2px] sm:gap-4 px-4 sm:px-8 py-3">
          <div className="flex items-center">
            <button
              onClick={onClickToggleSideMenu}
              ref={menuBtnRef}
              className={`transition-opacity duration-200 ${sideMenuToggle ? 'absolute opacity-0 pointer-events-none' : 'relative opacity-100'}`}
            >
              <div className="p-2 rounded-lg hover:bg-[var(--btnHover)] dark:hover:bg-[var(--darkBtnHover)]">
                <svg className="text-[#1D1C1B] dark:text-[#F3F3F3]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 10H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.5 14H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 3L15 13M15 17L15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C17.7712 21 19.6569 21 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </button>
            <button className={`transition-opacity duration-200 ${sideMenuToggle ? 'absolute opacity-0 pointer-events-none' : 'relative opacity-100'}`}>
              <div className="p-2 rounded-lg hover:bg-[var(--btnHover)] dark:hover:bg-[var(--darkBtnHover)]">
                <NewChatIcon className="text-[var(--iconColor)] dark:text-[var(--darkIconColor)]" />
              </div>
            </button>

            <div className={`transition-all duration-500 z-0 ${sideMenuToggle ? '-ml-4' : 'ml-2'}`}>
              <BgFadedDropdown />
            </div>
          </div>

          <div className="ml-auto">
            <ThemeSwitcher />
          </div>
        </header>
        <main className="w-[80%] lg:w-[60vw] max-w-[80vw] lg:max-w-[60vw] h-full self-center flex flex-col items-center">
          <div className="flex flex-col text-center mt-32">
            <h3 className="text-[28px] font-medium text-[#1D1C1B] dark:text-[#F3F3F3]">Welcome to Aura.</h3>
            <h3 className="text-[28px] font-medium text-[#666462] dark:text-[#B0B0B0]/70">How can I help you today?</h3>
          </div>
          <div className="mt-8 relative border bg-[#FCFCFC] dark:bg-[#1E1E1E] border-[#E4E4E4]/63 dark:border-[#2F2F2F] w-[90%] max-w-[51rem] px-3 pt-2 pb-[11px] rounded-[28px] shadow-[0px_1px_13px_-5px_rgba(0,_0,_0,_0.25)] dark:shadow-none">
            <span className={`absolute top-[18px] left-[24px] text-[#646362] dark:text-[#949494] text-sm pointer-events-none ${hasContent? 'opacity-0' : 'opacity-100'}`}>Ask a question...</span>
            <textarea 
              ref={textareaRef}
              dir="auto" 
              aria-label="Ask Aura anything" 
              className="scrollbar-hide w-full px-2 @[480px]/input:px-3 bg-transparent focus:outline-none text-fg-primary align-bottom min-h-14 max-h-[240px] pt-2 my-0 mb-5" 
              style={{
                resize: 'none',
                overflow: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }} 
              spellCheck="false"
              onInput={(e) => {
                handleInput();
                setHasContent(e.currentTarget.value.length > 0)
              }}
              onKeyDown={handleKeyDown}
            ></textarea>
            <div className=" w-full flex justify-between">
              <div className="flex gap-1">
                <Button isIconOnly color="default" variant="faded" className="p-3 rounded-full border border-[#EDEDED] dark:border-[#666666]/30 bg-inherit">
                  <AttachmentIcon />
                </Button>
                <Button color="default" variant="faded" className="border-[#EDEDED] dark:border-[#666666]/30 bg-inherit rounded-full p-3">
                  <span><GlobeIcon /></span>
                  <span>Search</span>
                </Button>
                <Button color="default" variant="faded" className="border-[#EDEDED] dark:border-[#666666]/30 bg-inherit rounded-full p-3">
                  <span><BlubIcon /></span>
                  <span>Search</span>
                </Button>
              </div>
              <div className="ml-auto">
                <Button isIconOnly color="default" variant="faded" className=" rounded-full bg-[#E8E8E4] dark:bg-white border border-[#EDEDED] dark:border-[#666666]/30">
                  <ArrowUpIcon className="dark:text-black" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}




