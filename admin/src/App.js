import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Listcat from "./pages/listcat/Listcat";
import Listless from "./pages/listless/Listcat";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Single from "./pages/single/Single";
import "./style/dark.scss";
// import NewLesson from "./pages/newLesson/NewLesson";
// import NewCategory from "./pages/newCategory/NewCategory";
import { userInputs, categoryInputs, lessonInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>

                // <Home />
              }
            />

            {/* Users routes */}
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add new user" />
                  </ProtectedRoute>
                }
              />
            </Route>
            {/* Categories routes */}
            <Route path="categories">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Listcat />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":categoryId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={categoryInputs} title="Add new category" />
                  </ProtectedRoute>
                }
              />
            </Route>
            {/* Lessons routes */}
            <Route path="lessons">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Listless />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":lessonId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={lessonInputs} title="Add new lesson" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
