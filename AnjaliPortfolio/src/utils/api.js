import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // your backend URL

// GitHub
export const getGithubProfile = (username) =>
  axios.get(`${API_BASE}/github/profile/${username}`).then(res => res.data);

export const getGithubContributions = (username) =>
  axios.get(`${API_BASE}/github/contributions/${username}`).then(res => res.data);

// LeetCode
export const getLeetCodeStats = (username) =>
  axios.get(`${API_BASE}/leetcode/${username}`).then(res => res.data);

export const getLeetCodeHeatmap = (username) =>
  axios.get(`${API_BASE}/leetcode/heatmap/${username}`).then(res => res.data);
