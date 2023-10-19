import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./Layout.styled";
const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
