import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadPage from "./pages/UploadPage";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Landing page (default route) */}
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Register page */}
      <Route path="/register" element={<Register />} />

      <Route
        path="/upload"
        element={
          <Layout>
            <UploadPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
