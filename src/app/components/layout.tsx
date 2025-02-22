import Container from "@/common/Container";
import Sideber from "@/layouts/Sideber";
import { ReactNode } from "react";


const ComponentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Container className="flex py-28">
        <Sideber />
        <main className="w-full">
          {children}
        </main>
      </Container>
    </div>

  )
}

export default ComponentsLayout;
