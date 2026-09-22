import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

// Accept both the managed preview's flags and ordinary Next.js CLI flags.
const require = createRequire(import.meta.url);
const incoming = process.argv.slice(2);
const args = [];
for (let i = 0; i < incoming.length; i++) {
  if (incoming[i] === '--strictPort') continue;
  args.push(incoming[i] === '--host' ? '--hostname' : incoming[i]);
}
if (!args.includes('--hostname')) args.push('--hostname', '0.0.0.0');
if (!args.includes('--port')) args.push('--port', '4173');
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'dev', '--webpack', ...args], { stdio: 'inherit', env: process.env });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('error', error => { console.error(error.message); process.exitCode = 1; });
child.on('exit', code => { process.exitCode = code ?? 0; });
