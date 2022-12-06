import { withIronSessionApiRoute } from "iron-session/next";
import { sessionConfig } from "./ironSession/ironSession.config";

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  // get user from database then:
  req.session.user = {
    email: "",
    name: "jun",
  };
  await req.session.save();
  res.send({ ok: true });
}, sessionConfig);
