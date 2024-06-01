import { useState, useEffect } from "react";

function DataFetcher() {
  // use useState to create 3 state variables named data, loading and error
  // set initial state to null for data and error, and true for loading
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Effect function: performs side effect (data fetching)
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // pass result into setData
      } catch (error) {
        setError(error); // pass error into setError
      } finally {
        setLoading(false); // pass false into setLoading
      }
    };

    fetchData();

    // Cleanup function (optional): clean up effects (if necessary)
    return () => {
      console.log("Cleanup function called");
    };
  }, []); // Dependency array: empty, so the effect runs only once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Fetched Data:</h1>
      <ul className="list-disc list-inside">
        {/* {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))} */} 
      </ul>
    </div>
  );
}

export default DataFetcher;
