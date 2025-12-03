import fetch from "node-fetch";
import News from "../models/News.js";

// Fetch latest news from Guardian API
export const fetchLatestNews = async (req, res) => {
  try {
    const url = `https://content.guardianapis.com/search?api-key=${process.env.GUARDIAN_API_KEY}&order-by=newest&page-size=20&show-fields=thumbnail,trailText`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.response.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch news" });
  }
};

// Save an article to database
export const saveArticle = async (req, res) => {
  try {
    const body = req.body;
    const existing = await News.findOne({ guardianId: body.guardianId });
    if (existing) return res.json({ message: "Already saved", article: existing });

    const article = await News.create({
      guardianId: body.guardianId,
      webTitle: body.webTitle,
      webUrl: body.webUrl,
      sectionName: body.sectionName,
      webPublicationDate: body.webPublicationDate,
      thumbnail: body.thumbnail,
      trailText: body.trailText,
      savedBy: req.user.id,
    });

    res.json({ message: "Saved successfully", article });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save article" });
  }
};

// Get saved articles
export const getSavedArticles = async (req, res) => {
  try {
    const articles = await News.find().sort({ createdAt: -1 }).limit(200);
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch saved articles" });
  }
};

// Delete a saved article
export const deleteArticle = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete article" });
  }
};
