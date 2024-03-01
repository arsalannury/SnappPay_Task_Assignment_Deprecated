import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import HomePage from "../layouts/home/HomePage";
import "@testing-library/jest-dom";

describe("Home Page Functionality", () => {
  test("should render elements correctly", async () => {
    render(<HomePage />);

    const SearchTitle = await screen.findByText(/Search Contacts/);
    const LastVisitedTitle = await screen.findByText(/Last Visited Contacts/);
    const ContactsTitle = await screen.findByTestId(/contacts-test-id/);
    const OopsImage = await screen.findByTestId(/oops-image-id/);

    expect(SearchTitle).toBeInTheDocument();
    expect(LastVisitedTitle).toBeInTheDocument();
    expect(ContactsTitle).toBeInTheDocument();
    expect(OopsImage).toBeInTheDocument();
  });

  test("contacts state should have length after component loaded", async () => {
    render(<HomePage />);

   
  });
});
