// import About from "./Components/About/About";
// import Experience from "./Components/Experience/Experience";
// import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import Projects from "./Components/Projects/Projects";

// function App() {
//   return (
//     <div className="bg-[#184d60] h-auto w-full overflow-hidden">
//       <Navbar />
//       <Home />
//       <About />
//       <Experience />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-[#184d60] h-auto w-full overflow-hidden">
      <Navbar />

      <div className="mt-10 mx-4 border-2 border-[#0c0c0c] shadow-lg rounded-lg p-6">
        <Home />
      </div>

      <div className="mt-20 mx-4 border-2 border-[#0c0c0c] shadow-lg rounded-lg p-6">
        <About />
      </div>

      <div className="mt-20 mx-4 border-2 border-[#0c0c0c] shadow-lg rounded-lg p-6">
        <Experience />
      </div>

      <div className="mt-20 mx-4 border-2 border-[#0c0c0c] shadow-lg rounded-lg p-6">
        <Projects />
      </div>

      <div className="mt-20 mx-4 border-2 border-[#0c0c0c] shadow-lg rounded-lg p-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
