import React from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { SidebarItem } from "@/types/navigation";
import { ChevronUp, CircleDollarSign, Home, User2, Users } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";

const menuItems: Array<SidebarItem> = [
  {
    to: "/overview",
    collapsible: false,
    name: "Home",
    translationKey: "home",
    icon: Home,
  },
  {
    to: "/finances",
    collapsible: false,
    name: "Finances",
    translationKey: "finances",
    icon: CircleDollarSign,
  },
  {
    to: "/members",
    collapsible: false,
    name: "Members",
    translationKey: "members",
    icon: Users,
  },
];

const MainSidebar = () => {
  const navigationT = useTranslations("navigation.sidebar");

  return (
    <Sidebar>
      <SidebarHeader>
        <ThemeToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{navigationT("application")}</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((mi: SidebarItem, idx: number) => {
              return (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <Link href={mi.to}>
                      <mi.icon />
                      {navigationT(mi.translationKey)}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {navigationT("username")}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Link href="/account-settings">
                    {navigationT("account-settings")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>{navigationT("sign-out")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
