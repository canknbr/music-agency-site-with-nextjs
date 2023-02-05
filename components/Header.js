import React from 'react';
import { useRef } from 'react';

function Header() {
  const headerRef = useRef(null);
  const headerMenuRef = useRef(null);
  return (
    <div>
      <div
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1000px]"
        ref={headerRef}
      >
        <div
          className="flex items-start justify-between h-fit w-full py-[5px]"
          ref={headerMenuRef}
        >
            <div className='mx-[5px] mix-blend-difference font-semibold text-[20px] leading-none'></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
