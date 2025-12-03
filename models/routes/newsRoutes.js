import express from "express";
import {
  fetchLatestNews,
  saveArticle,
  getSavedArticles,
  deleteArticle,
} from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public: Fetch latest news from Guardian API
router.get("/latest", fetchLatestNews);

// Protected: Save an article (admin/editor)
router.post("/save", authMiddleware, saveArticle);

// Protected: List saved articles
router.get("/saved", authMiddleware, getSavedArticles);

// Protected: Delete saved article
router.delete("/:id", authMiddleware, deleteArticle);

export default router;
