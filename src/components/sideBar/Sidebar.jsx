import Image from "next/image";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div className="p-8">
      <div className="flex justify-center ">
        <Image
          src={
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid"
          }
          width={150}
          height={150}
          alt="avatar image"
          className="rounded-full"
        />
      </div>
      <div>
        <ul className="mt-10 text-white space-y-3">
          <li>
            <span>Name:</span>
          </li>
          <li>
            <span>Designation:</span>
          </li>
          <li>
            <span>Office Time:</span>
          </li>
          <li>
            <span>OffDay:</span>
          </li>
        </ul>
      </div>
      <NavItem />
    </div>
  );
};

export default Sidebar;
