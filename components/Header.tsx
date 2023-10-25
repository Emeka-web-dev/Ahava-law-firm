import Image from "next/image";
import FramerContainer from "./FramerContainer";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

function Header() {
  const logo = "https://i.imgur.com/z1SbcYk.png";
  const logo_sm = "https://i.imgur.com/lhhAPNQ.png";

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className=" bg-black sticky top-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-[3rem] md:h-[3.5rem] px-4 md:px-2">
        <FramerContainer
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
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
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="mr-2"
        >
          <div className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((navlink, i) => (
              <Link key={i} href={navlink.link}>
                {navlink.name}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger className="flex md:hidden">
            <AlignRight className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="bg-black/80">
              <SheetHeader>
                <SheetDescription className="text-white py-8 text-md flex text-left flex-col space-y-4">
                  {navLinks.map((navlink, i) => (
                    <SheetClose key={i} asChild>
                      <Link href={navlink.link}>
                        {navlink.name}
                      </Link>
                    </SheetClose>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </FramerContainer>
      </div>
    </header>
  );
}

export default Header;
