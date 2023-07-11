import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { Routes, Route } from "../node_modules/react-router-dom/dist/index";
import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const NutritionProgramsPage = lazy(
  () => import("./pages/NutritionProgramsPage/NutritionProgramsPage")
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const BusinessLunchesPage = lazy(
  () => import("./pages/BusinessLunchesPage/BusinessLunchesPage")
);
const GastroShopPage = lazy(
  () => import("./pages/GastroShopPage/GastroShopPage")
);
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="nutritionPrograms" element={<NutritionProgramsPage />} />
          <Route path="businessLunches" element={<BusinessLunchesPage />} />
          <Route path="gastroShop" element={<GastroShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
