import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
};
// loading page
test("renders Home page title", async () => {
  renderWithProviders(<App />);
  const title = await screen.findByTestId("title");
  expect(title).toHaveTextContent("Characters and images");
});
// filtering
test("Home page search filters by id", async () => {
  const user = userEvent.setup();
  renderWithProviders(<App />);
  const input = screen.getByRole("textbox");
  await user.type(input, "10");
  expect(screen.getByText("Alan Rails")).toBeInTheDocument();
});
test("Home page search filters by id - negative test", async () => {
  const user = userEvent.setup();
  renderWithProviders(<App />);
  const input = screen.getByRole("textbox");
  await user.type(input, "11");
  expect(screen.queryByText("Alan Rails")).not.toBeInTheDocument();
});

test("Home page search filters by name", async () => {
  const user = userEvent.setup();
  renderWithProviders(<App />);
  const input = screen.getByRole("textbox");
  await user.type(input, "agency");
  expect(screen.getByText("Agency Director")).toBeInTheDocument();
});
test("Home page search filters by name - negative", async () => {
  const user = userEvent.setup();
  renderWithProviders(<App />);
  const input = screen.getByRole("textbox");
  await user.type(input, "morty");
  expect(screen.queryByText("Agency Director")).not.toBeInTheDocument();
});

test("Home page click on characters links to character page and loads character", async () => {
  const user = userEvent.setup();
  renderWithProviders(<App />);
  await user.click(screen.getByText(/agency director/i));
  expect(window.location.pathname).toBe("/character/9");
  expect(screen.queryByText("Gender: Male")).toBeInTheDocument();
});

// test('Home page click on Favorites takes to Favorites page',
//  // todo
//  );

// test('Home page click on Favorites icon is filled',
//   // todo
//   );
// test('favorites page has one character',
//     // todo
//   );
// test('favorites page has no characters but text',
//     // todo
// );

// todo add tests to ci/cd pipelines
