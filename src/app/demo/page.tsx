import React from 'react'
import Products from "@/api/products";
import { format } from "date-fns";
type Props = {}

async function getData() {
  const res = await fetch(
    "https://learningapi.thespecialcharacter.com/store/productshttps://learningapi.thespecialcharacter.com/store/products/prod_01HHF6V308B2NW3SXG5RHND524"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // const json = await res.json();
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error(json);
  // }

  // return json;

  try {
    const res = await fetch(
      "https://learningapi.thespecialcharacter.com/store/products"
    );

    if (!res.ok) {
      console.error("Server returned an error:", res.status, res.statusText);
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Server returned an error: ${res.status} ${res.statusText}`
      );
    }

    const json = await res.json();
    return json.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
}

export default async function Demo() {
  try {
    const products = await getData();
    // console.log(data);
    // console.log(1);
    if (products.length === 0) {
      console.log("Data is an empty array:", products);
      return <h1>DATA IS AN EMPTY ARRAY</h1>;
    }

    // if (!Array.isArray(data)) {
    //   console.log("Data is not an array:", data.products);
    //   return <h1>DATA IS NOT AN ARRAY</h1>;
    // }

    // if (!data || Object.keys(data).length === 0) {
    //   console.log("Data is empty or not an object:", data);
    //   return <h1>DATA IS EMPTY OR NOT AN OBJECT</h1>;
    // }
    return (
      <main className=" bg-slate-100">
        <h1>SHOP---</h1>
        <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
          <div className="flex flex-col p-5 gap-4 w-[100%]">
            <p className="text-xl font-bold">SHOP</p>
            <hr />
            <p className="text-xs">Clear All</p>
            <hr />
            <p className="text-sm font-bold">Price Range</p>
            <hr />
            <p className="text-sm font-bold">Category</p>
            <hr />
            <p className="text-sm font-bold">Brand</p>
            <hr />
            <p className="text-sm font-bold">Animal</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-5 justify-center gap-12">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className="border-slate-300 border-[0.5px] rounded-xl grid grid-rows-2 p-5 h-full bg-white">
                  {/* <img
                    src="https://petmania.vamtam.com/wp-content/uploads/2022/07/ignore-export3-640x640.jpg"
                    alt=""
                    className="p-6 transition-transform transform hover:scale-105"
                  /> */}
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100} // Set the width and height as per your requirement
                    height={100}
                    className="pb-1 rounded-xl transition-transform transform hover:scale-105 w-full h-full object-cover"
                  />
                  <div className="text-black text-start text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl mb-2 pt-4 p-3 flex flex-col gap-5">
                    <p />
                    {product.title}
                    <p className="font-semibold">{product.material}</p>

                    {product.options.map((option) => (
                      <div key={option.id} className="flex flex-col gap-5">
                        <p>{option.title}</p>
                        <p>Updated At: {option.updated_at}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <h1>ERROR FETCHING DATA</h1>;
  }
}

// async function getData() {
//   const res = await fetch(
//     "https://learningapi.thespecialcharacter.com/store/productshttps://learningapi.thespecialcharacter.com/store/products/prod_01HHF6V308B2NW3SXG5RHND524"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   // const json = await res.json();
//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error(json);
//   // }

//   // return json;

//   try {
//     const res = await fetch(
//       "https://learningapi.thespecialcharacter.com/store/products"
//     );

//     if (!res.ok) {
//       console.error("Server returned an error:", res.status, res.statusText);
//       const errorText = await res.text();
//       console.error("Error response:", errorText);
//       throw new Error(
//         `Server returned an error: ${res.status} ${res.statusText}`
//       );
//     }

//     const json = await res.json();
//     return json.products;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow the error to be caught by the calling function
//   }
// }

// export default async function Demo() {
  
//   return (
//     <div>



//     </div>
//   )
// }

