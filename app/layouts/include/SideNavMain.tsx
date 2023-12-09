import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavMain = () => {
  const pathName = usePathname();
  return (
    <div
      id="sideNavMain"
      className={` fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto   ${
        pathName === "/" ? "lg:w-[310px]" : "lg:w-[220px]"
      }`}
    >
      <div className="lg:w-full w-[55px] mx-auto">
        <Link href="/"></Link>
      </div>
    </div>
  );
};

export default SideNavMain;
