import net from 'net';

// an unused port according to https://svn.nmap.org/nmap/nmap-services 
const port = 8096;
const hostname = '127.0.0.1';

const server = net.createServer();

server.listen( port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log( 'log-db is now running on port', port );
});
