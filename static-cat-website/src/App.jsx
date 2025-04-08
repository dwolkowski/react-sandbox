import Header from "./components/Header";
import CatList from "./components/CatListItem.jsx";
import Examples from "./components/Examples";


function App() {
  return (
    <div>
      <Header />
      <main>
        <CatList />
        <Examples />
      </main>
    </div>
  );
}

export default App;
