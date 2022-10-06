import Home from "./components/Home";
import { ItemsProvider } from "./contexts/ItemsContext";

const App: React.FC = () => {
  return (
    <ItemsProvider>
      <Home />
    </ItemsProvider>
  );
};

export default App;
