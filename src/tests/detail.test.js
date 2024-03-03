import React from "react";
import "@testing-library/jest-dom";
import { server } from "../mocks/server";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DetailPage from "../layouts/detail/DetailPage";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Detail Page Functionality", () => {
  test("-- should render loading", async () => {
    render(
      <BrowserRouter>
        <DetailPage passIdFromTest={"1"} />
      </BrowserRouter>
    );

    const contactDetail = await screen.findByTestId("contact-detail");
    const contactImage = await screen.findByTestId("contactImage");
    const contactName = await screen.findByTestId("contactName");
    const contactCreatedAt = await screen.findByTestId("contactCreatedAt");
    const contactPhone = await screen.findByTestId("contactPhone");
    const contactTelegram = await screen.findByTestId("contactTelegram");
    const contactEmail = await screen.findByTestId("Email");
    const contactGender = await screen.findByTestId("Gender");
    const contactCompany = await screen.findByTestId("Company");
    const contactAddress = await screen.findByTestId("Address");

    const contactEmailInput = await screen.findByTestId("EmailInput");
    const contactGenderInput = await screen.findByTestId("GenderInput");
    const contactCompanyInput = await screen.findByTestId("CompanyInput");
    const contactAddressInput = await screen.findByTestId("AddressInput");

    expect(contactDetail).toBeInTheDocument();
    expect(contactImage).toBeInTheDocument();
    expect(contactName).toBeInTheDocument();
    expect(contactCreatedAt).toBeInTheDocument();
    expect(contactPhone).toBeInTheDocument();
    expect(contactTelegram).toBeInTheDocument();
    expect(contactEmail).toBeInTheDocument();
    expect(contactGender).toBeInTheDocument();
    expect(contactCompany).toBeInTheDocument();
    expect(contactAddress).toBeInTheDocument();
    expect(contactAddressInput).toHaveValue("-----");
    expect(contactCompanyInput).toHaveValue("Twitterwire");
    expect(contactGenderInput).toHaveValue("Genderfluid");
    expect(contactEmailInput).toHaveValue("jrobberts0@a8.net");
  });
});
