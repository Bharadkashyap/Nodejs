import { userlist } from "../model/userModel.js";

export function handleusers(req, res) {
  const data = userlist();
  res.render("user", { user: data });
}
