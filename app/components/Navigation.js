"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = ["HOME", "ITEM 1", "ITEM 2", "ITEM 3", "ITEM 4", "ITEM 5"];
export default function Navigation() {
  const [selected, setSelected] = useState(0);

  return (
    <ul className="hidden md:flex md:space-x-8 text-green">
      {navItems.map((item, i) => (
        <Link
          key={item}
          href="/"
          className={`px-2 inline-flex items-center pt-2 text-base h-fit ${
            i === selected &&
            "border-lightGreen text-green border-b-4 font-bold"
          }`}
          onClick={() => setSelected(i)}
        >
          {item}
        </Link>
      ))}
    </ul>
  );
}
