import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#e87f07"
      ariaLabel="oval-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        margin: '0 auto',
      }}
      wrapperClass="oval-wrapper"
    />
  );
};

export default Loader;
