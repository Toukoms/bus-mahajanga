import React from "react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage: string;
  let statusCode: number | null = null;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-background h-screen">
      <h1 className="text-4xl font-bold text-accent-foreground">Oops!</h1>
      <p className="text-lg text-muted-foreground">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-foreground">
        {statusCode ? <span>{statusCode} | </span> : null}
        <i>{errorMessage}</i>
      </p>
      <button
        className="px-3 py-2 bg-blue-500 hover:bg-blue-400 mt-4"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
