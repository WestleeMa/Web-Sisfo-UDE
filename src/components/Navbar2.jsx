import { useState } from "react";
import logoUKRIDA from "../assets/Logo_UKRIDA_300x300.png";
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

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "",
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
          href: "#",
        },
        {
          label: "Status",
          href: "#",
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
                  <DropdownItem key={child.label}>
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
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
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
                  <DropdownItem key={child.label}>
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
