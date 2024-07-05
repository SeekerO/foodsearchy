import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Display404 = lazy(() => import("../layout/section/404error/Display404"));
const Categories = lazy(() =>
  import("../layout/section/categories/Categories")
);
const SavedItems = lazy(() =>
  import("../layout/section/saveditems/SavedItems")
);
const ItemDisplay = lazy(() =>
  import("../layout/section/itemDisplay/ItemDisplayLayout")
);

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Categories />} />
      <Route path="/saveditems" element={<SavedItems />} />
      <Route path="/:id" element={<ItemDisplay />} />
      <Route element={<Display404 />} />
      <Route path="*" element={<Categories />} />
    </Routes>
  );
};

export default Router;
