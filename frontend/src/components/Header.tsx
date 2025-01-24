import React from "react";
import { useLocation } from "react-router";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className={`hover:text-blue-600 transition duration-250 flex items-center gap-x-2 p-1 font-medium text-base ${location.pathname === '/' ? 'text-blue-700' : ''}`}
      ><a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`hover:text-blue-600 transition duration-250 flex items-center gap-x-2 p-1 font-medium text-base ${location.pathname === '/projects' ? 'text-blue-700' : ''}`}
      >
        <a href="/projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`hover:text-blue-600 transition duration-250 flex items-center gap-x-2 p-1 font-medium text-base ${location.pathname === '/about' ? 'text-blue-700' : ''}`}
      >
        <a href="/about" className="flex items-center">
          About me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`hover:text-blue-600 transition duration-250 flex items-center gap-x-2 p-1 font-medium text-base ${location.pathname === '/contact' ? 'text-blue-700' : ''}`}
      >
        <a href="/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="text-black sticky top-0 shadow-none bg-white mx-auto x-4 py-2 border-none lg:px-8 lg:py-4 px-4">
      <div className="container mx-auto flex items-center justify-around">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-normal text-2xl"
        >
          Mariano Ocaranza
        </Typography>
        <div className="hidden lg:block ">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className={`container mx-auto flex items-center justify-center transition-opacity duration-300 ${ openNav ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}