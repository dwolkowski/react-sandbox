import { CAT_HEADER_LIST } from "../data.jsx";
import CatListItem from './CatListItem.jsx';

export default function CatList() {
  return (
    <section id="catList">
      <h2>The Most Powerful Cats</h2>
      <ul>
        {CAT_HEADER_LIST.map((catItem) => (
          <CatListItem key={catItem.name} {...catItem} />
        ))}
      </ul>
    </section>

  );
}