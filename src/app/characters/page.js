import Characters from "../components/Characters";

const getAllCharacters = async () => {
  const url = `https://rickandmortyapi.com/api/character`;
  const fetchData = await fetch(url);
  const response = await fetchData.json();
  return response;
};

const page = async () => {
  const { results } = await getAllCharacters();

  return (
    <div>
      <Characters characters={results} />
    </div>
  );
};

export default page;
