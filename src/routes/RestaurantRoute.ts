import express from "express";
import { param } from "express-validator";
import MyRestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  MyRestaurantController.searchRestaurant
);

export default router;
