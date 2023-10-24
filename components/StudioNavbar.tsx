import Link from "next/link";
import { LayoutProps } from "sanity";
import { PiArrowUUpLeft } from "react-icons/pi";

function StudioNavbar(props: LayoutProps) {
  return (
    <div>
      <div className="bg-[#101112] p-4">
        <Link href='/' className="flex items-center">
            <PiArrowUUpLeft className="h-6 w-6 mr-2" />
            Go to website
            </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
