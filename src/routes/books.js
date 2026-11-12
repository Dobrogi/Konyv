const express = require("express");
const db = require("../db/db");
const { books } = require("../db/schema");
const { eq } = require("drizzle-orm");
const errorHandler = require("../utilities/ErrorHandler");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const entries = await db.select().from(books);
    return res.status(200).json(entries);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Something went wrong!",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [entry] = await db
      .select()
      .from(books)
      .where(eq(books.id, +req.params.id));

    if (!entry) {
      return res.status(404).json({
        message: "book not found",
      });
      await db.insert(books).values({
        title: title,
        author: author,
        year: year,
      });
      return res.status(201).json({
        message: "Faja!",
      });
    }
  } catch (err) {
    return errorHandler(500, res, err);
  }
});

router.post("/", (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title) res.status(404).json({ message: "Field 'title' is required!" });
    if (!author)
      res.status(404).json({ message: "Field 'author' is required!" });
    if (year === undefined || year > new Date().getFullYear)
      res.status(404).json({ message: "Field 'year' is bad!" });

    await;
  } catch (error) {}
});

module.exports = router;
