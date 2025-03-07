import Container from "@/common/Container";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Sidebar from "@/layouts/Sideber";


export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container className="flex py-[140px]">
        <Sidebar />
        <main className=" px-4 w-full">{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
