import Link from "next/link";

const NavItem = () => {
  return (
    <div className="mt-10">
      <ul className="space-y-6 text-white">
        <li className="bg-indigo-600 p-3 rounded-md">
          <Link href={"/"}>Employee List</Link>
        </li>
        <li>
          <Link href={"/"}>Today s class</Link>
        </li>
        <li>
          <Link href={"/"}>Post Activity</Link>
        </li>
        <li>
          <Link href={"/"}>LogOut</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
