import React from 'react';
import { cn } from "@/lib/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "", id = "", ...props }) => {
  return (
    <div {...props} id={id} className={cn(className, "max-w-[1336px] px-4 mx-auto")}>
      {children}
    </div>
  );
};

export default Container;
