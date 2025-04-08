import catLogo from '../assets/cat-Logo.gif';

const reactDescriptions = ['The Most Powerful', 'The Greatest Of All Time', 'The Legendary'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={catLogo} alt="Car Logo" />
      <h1>Godish Cats</h1>
      <p>
        {description} Cats in the Multiverse. This website is a realm where motion defines might, these feline legends rise above all.
      </p>
    </header>
  );
}