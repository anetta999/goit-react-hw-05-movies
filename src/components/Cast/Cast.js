import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import { useState, useEffect } from 'react';

const defaultImg =
  'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

const Cast = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getActorsList = async () => {
      try {
        const { cast } = await fetchCastById(movieId);
        setActors(cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    getActorsList();
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width={185}
                  height={278}
                />
                <p>{name}</p>
                <p>Character: {character ? character : 'not mentioned'}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
