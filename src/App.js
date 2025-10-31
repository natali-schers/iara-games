import { NormalizeStyles } from "./shared/NormalizeStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common-components/Header/Header";
import { NotFound } from "./screens/NotFound";
import { Register } from "./screens/Register";
import styled from "styled-components";
import Footer from "./common-components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";

const Container = styled.div`
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 16px;
`;

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NormalizeStyles />
        <Header />
        <ToastContainer position="top-right" autoClose={3000} />
        <Container>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />   
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;