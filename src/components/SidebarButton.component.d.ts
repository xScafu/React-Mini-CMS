import type { ReactNode } from "react";
export interface SidebarButtonProps {
    path?: string;
    label?: string;
    icon?: ReactNode;
    cssClass: string;
    type?: "submit" | "reset" | "button";
}
export default function SidebarButton({ path, label, icon, cssClass, type, }: SidebarButtonProps): import("react/jsx-runtime").JSX.Element;
