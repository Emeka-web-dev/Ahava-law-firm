import Image from "next/image";
import FramerContainer from "./FramerContainer";

type Props = {
  content: String;
  title: String;
  image: any;
  direction?: boolean
};

function Card({ content, title, image, direction }: Props) {
  return (
    <FramerContainer initial={{
      x: direction ? -200 : 200,
      opacity: 0,
    }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }} viewport={{once: true}} className="w-full h-56 lg:h-72 relative overflow-hidden rounded-xl">
    <Image
      src={image}
      width={200}
      height={200}
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.3,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -1,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      alt="image"
    />
    <div className="z-10 w-full h-full relative flex items-center justify-center group">
      <h3 className="text-3xl font-bold group-hover:hidden capitalize">{title}</h3>
      <div className="absolute bg-black/75 text-[#FADBBA] text-lg w-full h-full top-[-100%] group-hover:top-0 flex items-center justify-center duration-150 ease-in">
        <p className="p-6 text-center">{content}</p>
      </div>
    </div>
  </FramerContainer>
  );
}

export default Card;

