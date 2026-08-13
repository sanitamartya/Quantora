console.log("Synora application started");

const shutdown = (signal) => {
  console.log(`Synora application shutting down: ${signal}`);
  process.exit(0);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
