import {
  ArrowLeftEndOnRectangleIcon,
  MoonIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/app-logo.png";

export default function Header() {
  return (
    <header className="fixed top-9 inset-x-0 mx-auto flex items-center w-[90%] h-24 bg-black/50 px-10 py-5 rounded-3xl tracking-tightest backdrop-blur-md">
      <div className="flex justify-between items-center w-full">
        <nav className="flex items-center gap-x-9">
          <div>
            <img src={logo} className="" alt="Golden Coffee" />
          </div>
          <ul className="flex gap-x-9 text-xl text-gray-300">
            <li className="font-dana-medium text-orange-200">
              <a href="#">صفحه اصلی</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
              <ul className="hidden">
                <li>قهوه ویژه</li>
                <li>ویژه در سطح جهانی</li>
                <li>قهوه درجه یک</li>
                <li>ترکیبات تجاری</li>
                <li>کپسول قهوه</li>
                <li>قهوه زینو برزیلی</li>
              </ul>
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
        <div className="flex items-center gap-x-10 text-orange-200 text-xl">
          <div className="flex gap-x-5">
            <div>
              <ShoppingCartIcon className="size-8.5" />
            </div>
            <div>
              <MoonIcon className="size-8.5" />
            </div>
          </div>
          <span className="w-px h-14 bg-white/20"></span>
          <a href="#" className="flex items-center gap-x-2.5">
            <ArrowLeftEndOnRectangleIcon className="size-8.5 rotate-180" />
            ورود | ثبت نام
          </a>
        </div>
      </div>
    </header>
  );
}
