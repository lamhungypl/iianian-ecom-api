import fs from 'fs';

export const logApiResponse = data => {
  const logStream = fs.createWriteStream('api.log', { flags: 'a' });
  logStream.write(JSON.stringify(data) + ',\r\n');
};
