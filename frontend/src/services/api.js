const API_BASE = "https://skills-backend-5dbr.onrender.com/api";
console.log("🛑 VERSION: V5 (FINAL URL FIX)");
console.log("🔗 Production API Base forced to:", API_BASE);

const request = async (path, { method = "GET", data, token } = {}) => {
  const headers = {};
  if (data !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const fullPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${API_BASE}${fullPath}`, {
    method,
    headers,
    body: data !== undefined ? JSON.stringify(data) : undefined
  });

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const payload = isJson ? await response.json() : null;

  if (!response.ok) {
    const message = payload?.error || "Request failed";
    throw new Error(message);
  }

  return payload;
};

const api = {
  login: (data) => request("/auth/login", { method: "POST", data }),
  signup: (data) => request("/auth/register", { method: "POST", data }),
  getDashboard: (token) => request("/progress/dashboard", { token }),
  getStreak: (token) => request("/streak", { token }),
  getTasks: (topicId, token) => request(`/tasks/${topicId}`, { token }),
  updateTaskProgress: (taskId, token) =>
    request("/progress", {
      method: "POST",
      token,
      data: { task_id: taskId, status: "completed" }
    })
};

export default api;
