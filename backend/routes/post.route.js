import express from "express";
import protectRoute from "../routes/middleware/protectRoute.js";
import { createPost,
    deletePost,
    commentOnPost,
    likeUnlikePost,
    getAllPosts,
    getLikedPosts,
    getFollowingPosts,
    getUserPosts} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/all", protectRoute, getAllPosts);
router.post("/create", protectRoute, createPost);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;