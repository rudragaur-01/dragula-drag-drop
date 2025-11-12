import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen w-full  flex flex-col">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 text-center">
        Drag, Drop & Arrange
      </h1>

      <main className="flex-1 mt-6 px-2">
        <Home />
      </main>
    </div>
  );
}

export default App;
