import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";
import "./style/dark.scss";
// import NewLesson from "./pages/newLesson/NewLesson";
// import NewCategory from "./pages/newCategory/NewCategory";
import { userInputs, categoryInputs, lessonInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* Users routes */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new user" />}
              />
            </Route>
            {/* Categories routes */}
            <Route path="categories">
              <Route index element={<List />} />
              <Route path=":categoryId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={categoryInputs} title="Add new category" />
                }
              />
            </Route>
            {/* Lessons routes */}
            <Route path="lessons">
              <Route index element={<List />} />
              <Route path=":lessonId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={lessonInputs} title="Add new lesson" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
