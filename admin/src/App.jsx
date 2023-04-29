import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Chat from "./Chat/Chat";
import Header from "./Header/Header";
import History from "./History/History";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Login from "./Login/Login";
import NewProduct from "./New/NewProduct";
import { AuthContextProvider } from "./Context/AuthContext";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const AdminProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" />;
    if (user.isConsultant) return <Navigate to="/chat" />;
    return children;
  };
  const ConsultantProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" />;
    return children;
  };
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <div
            id="main-wrapper"
            data-theme="light"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
            data-boxed-layout="full"
          >
            <Header />

            <Menu />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <AdminProtectedRoute>
                    <Home />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/chat"
                element={
                  <ConsultantProtectedRoute>
                    <Chat />
                  </ConsultantProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <AdminProtectedRoute>
                    <Products />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <AdminProtectedRoute>
                    <History />
                  </AdminProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/new"
                element={
                  <AdminProtectedRoute>
                    <NewProduct />
                  </AdminProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
