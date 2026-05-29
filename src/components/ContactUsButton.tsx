import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function ContactUsButton() {
  return (
    <Link href="/contact">
      <button className="fixed bottom-12 right-6 z-50 bg-zinc-950 text-white px-3 py-2 rounded-lg shadow-lg border-2 border-red-500 hover:bg-zinc-900 focus:outline-none sm:bottom-10 sm:right-10 sm:px-4 sm:py-2 sm:rounded-xl">
        <FaPhone
          className="mr-1 sm:mr-2 h-5 w-5 inline-block sm:h-4 sm:w-4 text-white"
          style={{ transform: "scaleX(-1)" }}
        />
        <span className="hidden sm:inline">Contact Us</span>
      </button>
    </Link>
  );
}
