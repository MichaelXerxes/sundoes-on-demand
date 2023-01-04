import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import "./App.css";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";
import SummaryForm from "./pages/summary/SummaryForm";
function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
