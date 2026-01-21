export interface SidebarButtonProps {
  path?: string;
  label?: string;
  icon: any;
  cssClass: string;
  type?: "submit" | "reset" | "button";
}
export default function SidebarButton({
  path,
  label,
  icon,
  cssClass,
  type,
}: SidebarButtonProps) {
  return (
    <>
      <a href={path}>
        <button className={cssClass} type={type}>
          {icon}
          {label}
        </button>
      </a>
    </>
  );
}
