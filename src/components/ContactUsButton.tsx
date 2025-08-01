import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function ContactUsButton() {
  return (
    <Link href="/contact">
      <button className="fixed bottom-10 right-10 z-50 bg-black text-white px-4 py-2 rounded-xl shadow-lg border-2 border-red-500 hover:bg-gray-900 focus:outline-none">
        <FaPhone
          className="mr-2 h-4 w-4 inline-block text-white"
          style={{ transform: "scaleX(-1)" }}
        />
        Contact Us
      </button>
    </Link>
  );
}
