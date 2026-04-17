import { cn } from "@/app/lib/utils";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}
export default function Container({ children, className = "", innerClassName = "" }: ContainerProps) {
  return (
    <div className={cn("container mx-auto! ", className)}>
      <div className={cn("w-full h-full", innerClassName)}>
        {children}
      </div>
    </div>
  );
}