const time = () => new Date().toISOString().split('T')[1].slice(0, -1);

const indentText = (text) => text.replace(/^(?!\s*$)/gm, ' '.repeat(13)).trim();

// ANSI color codes
const colors = {
  reset: '\x1b[0m', gray: '\x1b[90m', blue: '\x1b[34m', yellow: '\x1b[33m', red: '\x1b[31m'
};

const loggerCore = ({ level, messages, logFunction = console.log }) => {
  let color;
  switch (level) {
    case 'INFO':
      color = colors.blue;
      break;
    case 'WARN':
      color = colors.yellow;
      break;
    case 'ERROR':
      color = colors.red;
      break;
    default:
      color = colors.reset;
  }

  const formattedMessages = messages
    .map((msg) => typeof msg === 'string' ? msg : JSON.stringify(msg, null, 2))
    .map(indentText);

  logFunction(`${colors.gray}${time()}${colors.reset}`, `${color}[${level}]${colors.reset}`, ...formattedMessages);
};

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
