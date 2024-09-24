import NewsBoard from "./Components/NewsBoard"
import React, { useState } from 'react';
import Navbar from "./Components/Navbar";

const App = () => {
  const [category, setCategory] = useState("general");
console.log(category);

  return (
    <div>
     <Navbar setCategory={setCategory} />
     <NewsBoard category={category}/>
    </div>
  )
}

export default App