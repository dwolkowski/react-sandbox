
import { CAT_HEADER_LIST } from "./data.jsx";

import Header from "./components/Header";
import CatList from "./components/CatList";
import Examples from "./components/Examples";


function App() {
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>The Most Powerful Cats</h2>
          <ul>
            {CAT_HEADER_LIST.map((catItem) => (
              <CatList key={catItem.name} {...catItem} />
            ))}
          </ul>
        </section>

        <Examples />

      </main>
    </div>
  );
}

export default App;
