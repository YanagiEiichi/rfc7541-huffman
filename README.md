## rfc7541-huffman

A huffman algorithm implementation, according to the [rfc7541](http://tools.ietf.org/html/rfc7541).

#### Usage

```js
import huffman from 'rfc7541-huffman';

huffman.encode('Hello World'); // <Buffer c6 5a 28 3a 9c 8f 65 12 7f>

huffman.decode(new Buffer([ 0xc6, 0x5a, 0x28, 0x3a, 0x9c, 0x8f, 0x65, 0x12, 0x7f ])); // Hello World
```
