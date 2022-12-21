import { useEffect, useState } from "react";

const getHello = async () => {
  const response = await fetch("http://localhost:3000", {
    credentials: "include",
  });
  const data = await response.json();
  console.log(data);
};

function App() {
  useEffect(() => {
    getHello();
  }, []);

  return <div className="text-blue-500">hello tailwind</div>;
}

export default App;
