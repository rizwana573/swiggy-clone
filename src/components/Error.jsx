import {useRouteError} from "react-router";
const Error = () => {
      const error = useRouteError();
    return (
        <>
        <h1>{error.message}</h1>
        <h2>Oops!!</h2>
        <h3>Something went wrong!</h3>
        </>
    )
}

export default Error;