let url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://newsapp-xi.vercel.app";
export { url };
