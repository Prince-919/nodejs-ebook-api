import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRoute from "./user/userRoute";

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to ebook apis",
  });
});

// routes
app.use("/api/users", userRoute);

// Global error handler

app.use(globalErrorHandler);

export default app;
