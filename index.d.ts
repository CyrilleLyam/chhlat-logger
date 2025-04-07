// index.d.ts
declare module "chhlat-logger" {
  type LogLevel = "INFO" | "WARN" | "ERROR";

  interface Logger {
    info(...messages: (string | object)[]): void;
    warn(...messages: (string | object)[]): void;
    error(...messages: (string | object)[]): void;
  }

  const logger: Logger;

  export default logger;
}
