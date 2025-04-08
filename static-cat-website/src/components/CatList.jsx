export default function CatList({ image, name, description }) {
    return (
      <li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </li>
    );
  }