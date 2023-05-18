import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="flex h-[70px] items-center justify-between bg-blue-600 text-white">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
          className="pl-4"
        />
      </Link>
      <ul className="mr-4 flex list-none">
        <li className="flex h-[70px] items-center p-1 pr-4">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="flex h-[70px] items-center p-1 pr-4">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="flex h-[70px] items-center p-1 pr-4">
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
