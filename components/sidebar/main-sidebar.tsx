import React from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { SidebarItem } from "@/types/navigation";
import { CircleDollarSign, Home, Users } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

const menuItems: Array<SidebarItem> = [
  {
    to: "/overview",
    collapsible: false,
    name: "Home",
    icon: Home,
  },
  {
    to: "/finances",
    collapsible: false,
    name: "Finances",
    icon: CircleDollarSign,
  },
  {
    to: "/members",
    collapsible: false,
    name: "Members",
    icon: Users,
  },
];

const MainSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <ThemeToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((mi: SidebarItem, idx: number) => {
              return (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <Link href={mi.to}>
                      <mi.icon />
                      {mi.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default MainSidebar;
