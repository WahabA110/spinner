let time = 100;
setTimeout(() => {
  process.stdout.write('\r|');
}, time)
setTimeout(() => {
  process.stdout.write('\r/');
}, time + 200)
setTimeout(() => {
  process.stdout.write('\r-');
}, time + 400)
setTimeout(() => {
  process.stdout.write('\r\\');
}, time + 600)
setTimeout(() => {
  process.stdout.write('\r|');
}, time + 800)