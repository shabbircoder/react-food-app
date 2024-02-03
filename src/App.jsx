// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
// import ProductCard from "./components/ProductCard";

// export default function App() {
//   const [allFood, setAllFood] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   const APP_ID = "b3972793";
//   const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0";

//   const fetchFood = async () => {
//     try {
//       const res = await fetch(
//         `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
//       );
//       const data = await res.json();
//       setAllFood(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <Navbar />
//       <SearchBar />
//       <ProductCard />
//       {/* <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
//       <ProductCard allFood={allFood} loading={loading} /> */}

//       <button className=" font-size-32 " onClick={fetchFood}>click</button>
//     </div>
//   );
// }
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

function App() {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const APP_ID = "b3972793";
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0";

  const fetchFood = async () => {
    try {
      setLoading(true);
      //  const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=45e91629&app_key=7512dc0273feba0463e668762b1f3e5d`)

      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setAllFood(data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard allFood={allFood} loading={loading} />
    </div>
  );
}

export default App;
