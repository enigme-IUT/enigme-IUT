const p = [126, 66, 67, 72, 75, 95, 70, 94, 10, 105, 101, 127, 124, 99, 100];
const o = [5, 11, 2, 8, 14, 0, 9, 3, 12, 1, 7, 13, 4, 6, 10];
let out = Array(15).fill('\xa0'); 
let s = 0;

function x() {
    if (s < p.length) {
        let i = o[s]; 
        out[i] = String.fromCharCode(p[i] ^ 42); 
        document.getElementById('output').innerHTML = out.join('');
        s++;
        if (s < p.length) setTimeout(x, 10000);
    }
}
setTimeout(x, 300000);


// TTL initial : 300s. En attente du premier paquet...
