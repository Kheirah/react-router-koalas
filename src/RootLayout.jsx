import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <h1>Routing in React</h1>
      <Outlet /> {/* like a placeholder */}
      <Footer />
    </>
  );
}
