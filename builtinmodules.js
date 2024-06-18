const os = require("os");

//infot about current user
const user = os.userInfo();

//methos returns the system uptime in seconds
const system = os.uptime();

//os info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
