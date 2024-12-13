import "./index.css";
import { StatusSystem } from "./components/StatusSystem";
import { useApp } from "./app.hook";
import { Cards } from "./components/Cards";

function App() {
  const { data, status } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Estado del Terreno
        </h1>
        <Cards data={data} />
        <StatusSystem status={status} />
      </div>
    </div>
  );
}

export default App;
