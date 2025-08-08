import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    const {id} = useParams();
    const [data, setData] = useState(null);

    // ()=>{} -> callback function
    // [var1, var2] -> dependency List/Arrays

    // useEffect(()=>{
    //     const fetchDetails = async () => {
    //         try {
    //             const url = `https://dummyjson.com/products/${id}`;
    //             const res = await fetch(url);
    //             const data = await res.json();
    //         } catch (error) {
                
    //         }
    //     };
    //     fetchDetails();
    // }, []);

    // also can be written as 

   useEffect(() => {
    (async function fetchDetails() {
      try {
        const url = `https://dummyjson.com/products/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        // handle error accordingly
      }
    }) (); // this is trick in js. automatically calls function. don't have to do it manually as fetchDetails();

  }, []);

    // return <div>{JSON.stringify(data, null, 2)}</div>

     return <div>{data?.title}</div>;

}

export default ProductDetails;