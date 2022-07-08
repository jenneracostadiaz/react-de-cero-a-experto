import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado de Gift */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
