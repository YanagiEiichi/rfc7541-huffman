import huffman from '../huffman.js';

let result = Array.from({ length: 1E5 }).every(() => {
  let raw = Array.from({ length: Math.random() * 64 }, () => Math.random() * 256);
  let src = String.fromCharCode.apply(null, raw);
  let res = huffman.decode(huffman.encode(src));
  return src === res;
});

if (result) {
  console.log('[32mOK[0m');
} else {
  console.error('[31mError[0m');
  process.exit(1);
}
