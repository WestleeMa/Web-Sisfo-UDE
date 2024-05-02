import { useState } from "react";
import logoUKRIDA from "../assets/Logo_UKRIDA_300x300.png";
import userIMG from "../assets/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contacts",
      href: "#",
    },
    {
      label: "Thesis",
      children: [
        {
          label: "Fill Form",
          href: "fill-form",
        },
        {
          label: "Status",
          href: "status",
        },
      ],
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-sky-950 text-white"
      shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img className="h-8 w-auto" src={logoUKRIDA} alt="Your Company" />
          <p className="font-bold text-inherit ml-2">SISFO UDE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarBrand>
          <img className="h-8 w-auto" src={logoUKRIDA} alt="Your Company" />
          <p className="font-bold text-inherit ml-2">SISFO UDE</p>
        </NavbarBrand>

        {menuItems.map((el) =>
          el.children ? (
            <Dropdown>
              <NavbarItem className="cursor-pointer">
                <DropdownTrigger>
                  <span className="flex items-end">
                    {el.label}{" "}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-white-300"
                      aria-hidden="true"
                    />
                  </span>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {el.children.map((child) => (
                  <DropdownItem
                    key={child.label}
                    onClick={() => navigate(child.href)}
                  >
                    <Link color="foreground" href={child.href}>
                      {child.label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={el.label}>
              <Link className="text-white" href={el.href}>
                {el.label}
              </Link>
            </NavbarItem>
          )
        )}
        <Dropdown>
          <NavbarItem className="cursor-pointer">
            <DropdownTrigger>
              <Avatar size="sm" src={userIMG} />
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link color="foreground" href="#">
                Your Profile
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link color="foreground" href="#">
                Settings
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link color="foreground" href="#">
                Log Out
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((el) =>
          el.children ? (
            <Dropdown>
              <NavbarItem className="cursor-pointer">
                <DropdownTrigger>
                  <span className="flex items-end">
                    {el.label}{" "}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-white-300"
                      aria-hidden="true"
                    />
                  </span>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {el.children.map((child) => (
                  <DropdownItem
                    key={child.label}
                    onClick={() => navigate(child.href)}
                  >
                    <Link color="foreground" href={child.href}>
                      {child.label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={el.label}>
              <Link color="foreground" href={el.href}>
                {el.label}
              </Link>
            </NavbarItem>
          )
        )}
        <NavbarItem>
          <Link color="foreground">Profile</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Setting</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Log out</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
