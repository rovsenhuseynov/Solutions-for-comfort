import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Faq from "./pages/Faq/Faq";
import Contacts from "./pages/Contacts/Contacts";
import SearchPage from "./pages/SearchPage/SearchPage";
import Products from "./pages/Products/Products";
import Journal from "./pages/Journal/Journal";
import Provisions from "./pages/Provisions/Provisions";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/provisions" element={<Provisions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
