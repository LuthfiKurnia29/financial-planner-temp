import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as _usersService from "./users.service";

export const usersRouter = express.Router();

usersRouter.get("/", async (request: Request, response: Response) => {
  try {
    const users = await _usersService.getUsers();
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

usersRouter.post(
  "/",
  body("name").isString(),
  body("email").isEmail(),
  body("password").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const newUser = await _usersService.createUser(request.body);
      return response.status(200).json(newUser);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);
