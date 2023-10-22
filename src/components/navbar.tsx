import { useState} from "react";
import { Bars3Icon, XMarkIcon, AtSymbolIcon, CodeBracketIcon, LinkIcon} from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";

type Props = {};

const Navbar = (props: Props) => {
    /* Apply these tailwind classes to more than one location */
  const flexBetween = "flex items-center justify-between"
  return (<nav>
    {/* full nav bar div */}
    {/* responsive design: fixed/positioning nav bar at the top; top-0/placement of nav at top; z-30/z index so it pops up above everything else; width/ full width no matter screen size; py/padding on top and bottom */}
    <div className={'flex items-center justify-between fixed top-0 z-30 w-full py-6'}>
        {/* Working this out right now, the buttons and logo - 1/3 navigation, 1/3 logo, 1/3 contact? */}
        {/* mx-auto/center at partifulcar position; width/ see above */}
        <div className={{flexBetween} +'mx-auto w-5/6'}>
            {/* left side */}
            <div className={{flexBetween} + 'w-full'}>
                {/* Navigation words, left side */}
                <div className={{flexBetween} + 'gap-8 text-2xl'}>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Fun</p>
                </div>

                {/* Logo, middle */}
                <img alt="logo" src={Logo}/>

                {/* Contact, right side */}
                <div className={{flexBetween} + 'gap-10'}>
                    <LinkIcon/>
                    <AtSymbolIcon/>
                    <CodeBracketIcon/>
                </div>
            </div>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;