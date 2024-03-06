import { Triangle } from "react-loader-spinner";

export const Loader = () => {
  return (
        <Triangle
          visible={true}
          height="150"
          width="150"
          color="#3470FF"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
  );
};