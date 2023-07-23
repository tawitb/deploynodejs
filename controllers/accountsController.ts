import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/member", getAllAccount);
//Controller.post("/account", createAccount);
//Controller.patch("/account/:id", updateAccount);
//Controller.delete("/account/:id", deleteAccount);
Controller.post("/regismember", createAccount);

export default Controller;
