const dev = process.env.NODE_ENV !== "production";
const server = dev ? "http://localhost:3000" : "https://newsapp-xi.vercel.app";

export { server };
