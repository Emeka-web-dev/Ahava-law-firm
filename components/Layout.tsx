import { ReactNode } from "react";
import FramerContainer from "./FramerContainer";

type Props = {
  children: ReactNode;
  img: String;
  pageName: String;
};

function Layout({ children, img, pageName }: Props) {
  return (
    <>
      <div
        className="relative w-full md:min-h-[300px] min-h-[250px] flex"
      >
        <div className="absolute right-0 w-full h-full bg-gray-300 bg-fixed bg-cover bg-center opacity-50 z-[-1]" style={{backgroundImage: `url(${img})`}}/>
        <FramerContainer initial={{opacity: 0, scale: 1.4}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}} viewport={{once: true}} className="flex items-center justify-center w-full">
          <h1 className="capitalize text-4xl lg:text-6xl font-bold text-center text-[#FADBBA]">
            Ahava cyber firm
          </h1>
        </FramerContainer>
      </div>
      <div className="text-center p-2 bg-black">
        <h2 className="text-3xl font-medium">{pageName}</h2>
      </div>
      <div className="">{children}</div>
    </>
  );
}

export default Layout;
