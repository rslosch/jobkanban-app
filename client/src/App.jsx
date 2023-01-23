import { useState, useEffect } from "react";
import { GlobalProvider } from "./context/globalState.js";
import Board from "./Board.jsx"

function App() {
// Logic goes here

  return (
    <div>
      <GlobalProvider> 
        <div className="overflow-auto bg-slate-50 h-screen w-screen">
          <Board />
        </div>
      </GlobalProvider>  
    </div>
  );
}

export default App;
