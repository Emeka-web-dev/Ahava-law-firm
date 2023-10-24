import Link from "next/link";
import { BsPhone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

  
  type Props = {
    email: string;
    address: string;
    phone: string;
  }
async function ContactInfo({email, address, phone}: Props) {
 

  return (
    <div className="flex flex-col lg:justify-center lg:items-center h-full m-8 lg:m-0">
      <div className="flex flex-col gap-8">
        <div className="flex space-x-4">
          <HiOutlineLocationMarker className="w-8 h-8 text-[#FADBBA]" />
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-2xl">Visit</h3>
            <h4 className="">{address}</h4>
          </div>
        </div>

        <div className="flex space-x-4">
          <BsPhone className="w-8 h-8 text-[#FADBBA]" />
          <div className="flex flex-col space-y-2">
            <Link href={`tel:${phone}`} className="font-semibold text-2xl">
              Call
            </Link>
            <h4 className="">{phone}</h4>
          </div>
        </div>
        <div className="flex space-x-4">
          <FiSend className="w-8 h-8 text-[#FADBBA]" />
          <div className="flex flex-col space-y-2">
            <Link href={`mailto:${email}`} className="font-semibold text-2xl">Email</Link>
            <h4 className="">{email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
