declare module "chhlat-logger" {
  type LogLevel = "INFO" | "WARN" | "ERROR";

  interface Logger {
    info(...messages: Array<string | object>): void;
    warn(...messages: Array<string | object>): void;
    error(...messages: Array<string | object>): void;
  }

  interface LoggerPlugin {
    log(level: LogLevel, messages: string[]): void;
  }

  /**
   * Registers a new logger plugin to receive log events.
   * @param plugin A plugin that implements a `log` function.
   */
  export function registerLoggerPlugin(plugin: LoggerPlugin): void;

  const logger: Logger;

  export default logger;
}
