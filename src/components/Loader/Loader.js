import { Watch } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';
export const Loader = () => {
  return (
    <Backdrop>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Backdrop>
  );
};
