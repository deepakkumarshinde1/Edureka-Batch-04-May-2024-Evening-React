import Alters from "./components/Alters";
import UserRegistration from "./components/UserRegistration";
import UserTable from "./components/UserTable";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

let client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3004/graphql",
  }),
  defaultOptions: defaultOptions,
});
const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Alters />
        <section className="container-fluid">
          <header className="row">
            <nav className="col-12 border-bottom shadow-sm py-2">
              <ul className="list-unstyled d-flex gap-4 justify-content-center mb-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-success text-decoration-none"
                        : "text-decoration-none"
                    }
                  >
                    <i className="fa fa-home" aria-hidden="true"></i> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user-list"
                    className={({ isActive }) =>
                      isActive
                        ? "text-success text-decoration-none"
                        : "text-decoration-none"
                    }
                  >
                    <i className="fa fa-users" aria-hidden="true"></i> User List
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<UserRegistration />} />
            <Route path="/user-list" element={<UserTable />} />
          </Routes>
        </section>
      </ApolloProvider>
    </>
  );
};

export default App;
