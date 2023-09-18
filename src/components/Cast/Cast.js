import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import { useState, useEffect } from 'react';
import {
  CastCardFooter,
  CastList,
  CastListItem,
  CastText,
} from './Cast.styled';

const defaultImg =
  'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getActorsList = async () => {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await fetchCastById(movieId);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getActorsList();
  }, [movieId]);

  return (
    <>
      {loading && <p>LOADING</p>}
      {error && !loading && (
        <p>Something went wrong, please try reloading the page</p>
      )}
      {actors && (
        <CastList>
          {actors.map(({ profile_path, name, character, id }) => {
            return (
              <CastListItem key={id}>
                <div>
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
                </div>
                <CastCardFooter>
                  <CastText>{name}</CastText>
                  <CastText>
                    Character: {character ? character : 'not mentioned'}
                  </CastText>
                </CastCardFooter>
              </CastListItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
