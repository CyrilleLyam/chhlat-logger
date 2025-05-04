const time = () => new Date().toISOString().split('T')[1].slice(0, -1);

const indentText = (text) => text.replace(/^(?!\s*$)/gm, ' '.repeat(13)).trim();

// ANSI color codes
const colors = {
  reset: '\x1b[0m', gray: '\x1b[90m', blue: '\x1b[34m', yellow: '\x1b[33m', red: '\x1b[31m'
};

// 👇 plugin storage
const loggerPlugins = [];

export const registerLoggerPlugin = (plugin) => {
  if (typeof plugin.log !== 'function') {
    throw new Error('Plugin must implement log(level, messages)');
  }
  loggerPlugins.push(plugin);
};

const loggerCore = ({ level, messages }) => {
  const formattedMessages = messages.map((msg) =>
    typeof msg === 'string' ? msg : JSON.stringify(msg, null, 2)
  );

  // Call every registered plugin
  for (const plugin of loggerPlugins) {
    plugin.log(level, formattedMessages);
  }
};

registerLoggerPlugin({
  log(level, messages) {
    let color;
    switch (level) {
      case 'INFO': color = colors.blue; break;
      case 'WARN': color = colors.yellow; break;
      case 'ERROR': color = colors.red; break;
      default: color = colors.reset;
    }

    const formatted = messages.map(indentText);
    console.log(`${colors.gray}${time()}${colors.reset}`, `${color}[${level}]${colors.reset}`, ...formatted);
  }
});

const logger = {
  info(...messages) {
    loggerCore({ level: 'INFO', messages });
  }, warn(...messages) {
    loggerCore({ level: 'WARN', messages });
  }, error(...messages) {
    loggerCore({ level: 'ERROR', messages });
  }
};

export default logger;
