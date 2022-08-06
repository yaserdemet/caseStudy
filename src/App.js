import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react"
import Home from "./pages/Home";
import loadingGif from "./utils/loading.gif"
import AppRouter from "./router/AppRouter";



function App() {
  const [loading , setLoading] = React.useState(true)
 
 
useEffect(() => {
   setTimeout(() => {
setLoading(false)
   },2000)
} ,[])


  return (
    <div className="App">
     {
    loading ?  <img style={{width : "600px"}}  src={loadingGif} alt="sluggish" /> : <AppRouter />
     }
 
    </div>
  );
}

export default App;
