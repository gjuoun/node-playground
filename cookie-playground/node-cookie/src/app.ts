import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
// import { ironSession } from "iron-session/express";
import dotenv from "dotenv";
dotenv.config();

// declare module "iron-session" {
//   interface IronSessionData {
//     views?: number;
//   }
// }

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.enable("trust proxy");

app.use(
  cookieSession({
    secret: "random string",
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: process.env.NODE_ENV === "development" ? false : true,
    sameSite: process.env.NODE_ENV === "development" ? false : "none",
  })
);
// app.use(
//   ironSession({
//     cookieName: "jun-session",
//     password:
//       "/junguo/Code/gjuoun/node-playground/cookie-playground/node-cookie/node_modules/.pnpm/iron-session@6.3.1_express@4.18.1/node_modules/iron-session/express/index.ts:10:27",
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "development" ? false : true,
//       httpOnly: process.env.NODE_ENV === "development" ? false : true,
//       sameSite: process.env.NODE_ENV === "development" ? false : "none",
//     },
//   })
// );

// app.get("/", async (req, res) => {
//   req.session.views = (req.session.views || 0) + 1;
//   await req.session.save();
//   res.send({ views: req.session.views });
// });


app.get("/", async (req, res) => {
  req.session!.views = (req.session!.views || 0) + 1;
  res.send({ views: req.session!.views });
});

app.get("/views", (req, res) => {
  res.send({ views: req.session!.views });
});

const server = app.listen(3000, () => {
  console.log("listen on port 3000");
});
