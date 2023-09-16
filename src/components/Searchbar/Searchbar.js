import { useSearchParams } from 'react-router-dom';
export const Searchbar = () => {
  const [setSearchParams] = useSearchParams();
  //   const query = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.query.value;

    if (inputValue === '') {
      alert('Searchfield cannot be empty, please enter the film name');
      return;
    }

    setSearchParams({ query: inputValue });
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" autoFocus="on" autoComplete="on" />
      <button type="submit">Search</button>
    </form>
  );
};
