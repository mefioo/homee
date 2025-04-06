import { LucideIcon } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

export interface SidebarItem {
  to: Url;
  collapsible: boolean;
  name: string;
  translationKey: string,
  icon: LucideIcon;
}
