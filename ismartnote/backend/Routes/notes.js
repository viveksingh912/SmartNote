const express = require("express");
const router = express.Router();
const Notes = require("../modules/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
// using get request to fetch all notes from the database :: login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
   try {
      const notes = await Notes.find({ user: req.user.id });
      res.json(notes);
   } catch (error) {
      res.status(500).send({ error: "internal server error" });
   }
});
// using post request to add a note in the database :: login required
router.post(
   "/addnote",
   fetchuser,
   [
      body("title", "Enter a valid title").isLength({ min: 3 }),
      body("description", "Enter a valid password").isLength({ min: 5 }),
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
      try {
         const { title, description, tag } = req.body;
         const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id,
         });
         let savedNotes = await note.save();
         res.send(savedNotes);
      } catch (error) {
         res.status(500).send({ error: "Internal server error" });
      }
   }
);
// route-3:: update an existing note::login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
   let { title, description, tag } = req.body;
   let newNote = {};
   if (title) {
      newNote.title = title;
   }
   if (description) {
      newNote.description = description;
   }
   if (tag) {
      newNote.tag = tag;
   }
   try {
      let note = await Notes.findById(req.params.id);
      if (!note) {
         return res.status(401).send("not allowed");
      }
      if (note.user.toString() !== req.user.id) {
         return res.status(401).send("not allowed");
      }
      note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
      res.json({ note });
   } catch (error) {
      res.status(500).json({ error: "Internal server error" });
   }
});
// deleteting an existiing node using delete request :: login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
   try {
      let note = await Notes.findById(req.params.id);
      if (!note) {
         return res.status(401).send("not found");
      }
      if (note.user.toString() !== req.user.id) {
         return res.status(401).send("not allowed");
      }
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({ success: "your notes have been deleted successfully", note });
   } catch (error) {
      res.status(500).send(req.user.toString());
   }
});
module.exports = router;
