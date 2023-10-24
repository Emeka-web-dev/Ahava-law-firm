import Image from "next/image";
import Navlinks from "./Navlinks";
import FramerContainer from "./FramerContainer";
import Link from "next/link";

function Header() {
  const logo = "https://i.imgur.com/z1SbcYk.png";
  const logo_sm = "https://i.imgur.com/lhhAPNQ.png";

  return (
    <header className=" bg-black">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-[9vh] px-4 md:px-2">
        <FramerContainer
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="/">
            <div className="hidden md:flex relative w-28 h-12">
              <Image
                src={logo}
                alt="logo"
                layout="fill"
                className="object-contain"
              />
            </div>
          </Link>

          <Link href="/">
            <div className="relative h-10 w-20 md:hidden">
              <Image
                src={logo_sm}
                alt="logo"
                layout="fill"
                className="z-20 object-contain"
              />
            </div>
          </Link>
        </FramerContainer>
        <FramerContainer
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Navlinks />
        </FramerContainer>
      </div>
    </header>
  );
}

export default Header;
