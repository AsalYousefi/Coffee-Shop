import { ArrowLeftEndOnRectangleIcon, MoonIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/app-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="">
        <div>
          <img src={logo} className="" alt="Golden Coffee" />
        </div>
        <ul>
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
          <li>
            <a href="#">فروشگاه</a>
            <ul></ul>
          </li>
          <li>
            <a href="#">دیکشنری</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>
      <div>
        <div>
          <div>
            <ShoppingCartIcon className="size-8.5" />
          </div>
          <div>
            <MoonIcon className="size-8.5" />
          </div>
        </div>
        <a href="#">
            <ArrowLeftEndOnRectangleIcon className="size-8.5" />
            ورود | ثبت نام
        </a>
      </div>
    </header>
  );
}
