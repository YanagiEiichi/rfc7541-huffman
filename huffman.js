const HUFFMAN_TREE = require('./huffman-tree.json');
const HUFFMAN_MAP = [];

// Build HUFFMAN_MAP from HUFFMAN_TREE
void function callee(path, node) {
  typeof node === 'number' ? HUFFMAN_MAP[node] = path : node.forEach((v, i) => callee(path.concat(i), v));
}([], HUFFMAN_TREE);

const decode = buffer => {
  let result = [];
  let node = HUFFMAN_TREE;
  for (let i = 0; i < buffer.length; i++) {
    for (let j = 0; j < 8; j++) {
      node = node[buffer[i] >> (7 - j) & 1];
      if (typeof node === 'number') {
        result.push(node);
        node = HUFFMAN_TREE;
      }
    }
  }
  return String.fromCharCode.apply(null, result);
};

const encode = string => {
  let result = [];
  let [ exp, tmp ] = [ 8, 0 ];
  for (let i = 0; i < string.length; i++) {
    let bits = HUFFMAN_MAP[string.charCodeAt(i)];
    for (let j = 0; j < bits.length; j++) {
      tmp += bits[j] << --exp;
      if(exp) continue;
      result.push(tmp);
      [ exp, tmp ] = [ 8, 0 ];
    }
    if(i + 1 === string.length && exp < 8) result.push(tmp + (1 << exp) - 1);
  }
  return new Buffer(result);
};

export default { encode, decode };
