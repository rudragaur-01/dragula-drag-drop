
import Home from './pages/Home';

function App() {
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">
     
      <header className="fixed top-0 w-full bg-white shadow-md py-3 text-center z-10">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
          Drag and Drop
        </h1>
      </header>

      
      <main className="flex-1 mt-16">
        <Home />
      </main>
    </div>
  );
}

export default App;
