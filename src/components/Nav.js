import React from "react";
import { BsCart } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <ul className="flex space-x-16 px-16">
        <li className="flex gap-2 ">
          <TbDiscount2 size={23} />
          Offers
        </li>
        <li className="flex gap-2">
          <BiHelpCircle size={23} />
          Help
        </li>
        <li className="flex  gap-2">
          <FaRegUser size={20} />
          Sign in
        </li>
        <li className="flex gap-2">
          <BsCart size={20} />
          Cart
        </li>
      </ul>
    </div>
  );
};

export default Nav;
