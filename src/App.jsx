import Create from "./compoients/Create";
import Read from "./compoients/Read";

const App = () => {
  return (
    <div className="text-white flex w-screen h-screen bg-gray-600 p-10">
      <Create />
      <Read />
    </div>
  );
};

export default App;
