import { rest } from "msw";

export const handlers = [
  rest.get(`http://localhost:1337/passenger`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            first_name: "Jabez",
            last_name: "Robberts",
            email: "jrobberts0@a8.net",
            gender: "Genderfluid",
            phone: "1787525707",
            note: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            telegram: "jrobberts0",
            avatar:
              "https://robohash.org/nihildictadistinctio.png?size=300x300&set=set1",
            company: "Twitterwire",
            address: null,
            createdAt: 1637996519400,
            updatedAt: 1637996519400,
            id: 1,
          },
        ],
      })
    );
  }),
  rest.get(`http://localhost:1337/passenger/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        first_name: "Jabez",
        last_name: "Robberts",
        email: "jrobberts0@a8.net",
        gender: "Genderfluid",
        phone: "1787525707",
        note: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        telegram: "jrobberts0",
        avatar:
          "https://robohash.org/nihildictadistinctio.png?size=300x300&set=set1",
        company: "Twitterwire",
        address: null,
        createdAt: 1637996519400,
        updatedAt: 1637996519400,
        id: 1,
      })
    );
  }),
];
