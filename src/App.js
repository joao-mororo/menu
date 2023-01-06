import { BrowserRouter } from "react-router-dom";
import CartButton from "./components/CartButton";
import CartProvider from "./contexts/cart";
import Sidebar from "./components/Sidebar";
import Routes from "./routes";

export default function App() {

  const style = {
    display: "flex"
  }

  return (
    <div style={style}>
      <CartProvider>
        <BrowserRouter>
          <Sidebar />
          <Routes />
          <CartButton />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}