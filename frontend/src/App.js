import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import SideBar from "./Components/SideBar";
import VideoWatch from "./Components/VideoWatch";
import Routers from "./Routers";




function App() {


  return (


    <div className="App">

    

     <Header/>
     
      <div className="body flex">

       <SideBar/>

       <Routers/>

        


      </div>
     
    </div>

  );
}

export default App;
