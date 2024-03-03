import React from "react";
import "@testing-library/jest-dom";
import { server } from "../mocks/server";
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "../layouts/home/HomePage";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import { rest } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home Page Functionality", () => {

  test("-- should render static elements correctly", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const SearchTitle = await screen.findByText(/Search Contacts/);
    const LastVisitedTitle = await screen.findByText(/Last Visited Contacts/);
    const ContactsTitle = await screen.findByTestId(/contacts-test-id/);

    expect(SearchTitle).toBeInTheDocument();
    expect(LastVisitedTitle).toBeInTheDocument();
    expect(ContactsTitle).toBeInTheDocument();
  });

  test("-- contacts should exist at the DOM after component loaded", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const contactCards = await screen.findByTestId("contact-card-id");

    expect(contactCards).toBeInTheDocument();
  });

  test("-- should render empty last visited list", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const OopsImage = screen.getByTestId("oops-wrapper");

    expect(OopsImage).toBeInTheDocument();
  });

  test("-- should render search input and type in it", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    userEvent.setup();

    const searchBoxWrapper = screen.getByTestId("searchBoxWrapper");
    const searchBoxLabel = screen.getByTestId("searchBoxLabel");
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "type");
    await userEvent.type(inputElement, "type");
    await userEvent.type(inputElement, "type");

    expect(searchBoxWrapper).toContainElement(searchBoxLabel);
    expect(searchBoxWrapper).toContainElement(inputElement);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute(
      "placeholder",
      "Type something to search ..."
    );

    expect(inputElement).toHaveValue("typetypetype");
  });


  test('-- should render empty contacts list ', async () => { 
    server.use(
      rest.get("http://localhost:1337/passenger", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const thereAreNoElement = await screen.findByText(
      "Oops! The Last Visited List Is Empty"
    );

    expect(thereAreNoElement).toBeInTheDocument();

  })

});
