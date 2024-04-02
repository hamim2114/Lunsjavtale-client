import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
// import { createUploadLink } from "apollo-upload-client"

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token")
    ? `JWT ${localStorage.getItem("token")}`
    : "";

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    // Graphql Error hapenning
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions, locations, path }) => {
        if (
          message === "Signature has expired" ||
          message === "You are not authorized user."
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          window.location.href = "/admin/login";
        }
      });
    }

    // If network error happening
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);
const BASE_URL = import.meta.env.BASE_URL;

// const link = from([
//   errorLink,
//   new createUploadLink({ uri: `${BASE_URL}graphql/` }),
// ]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: BASE_URL
  // link: authLink.concat(link),
});
