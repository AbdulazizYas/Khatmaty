import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>ختمتي</h1>
      </div>
      <Link href="/">
        <a>الرئيسية</a>
      </Link>
      <Link href="/tasmeat">
        <a>التسميعات</a>
      </Link>
    </nav>
  );
};

export default Navbar;
