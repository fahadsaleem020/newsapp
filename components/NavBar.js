import navbarStyle from "../styles/navbar.module.css";
import Link from "next/link";
function NavBar() {
  return (
    <div className={navbarStyle.navContainer}>
      <div>
        <Link href="/">GlobalNews</Link>
      </div>
      <div>
        <ul>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
