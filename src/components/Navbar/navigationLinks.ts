import { ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavigationLink {
  to: string;
  label: string;
  icon?: LucideIcon;
}

export const navLinksCenter = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/creators", label: "Creators" },
] satisfies NavigationLink[];

export const navLinksRight = [
  { to: "/login", label: "Sign In" },
  { to: "/signup", label: "Join Us" },
  { to: "/cart", label: "Shopping cart", icon: ShoppingBag },
] satisfies NavigationLink[];
