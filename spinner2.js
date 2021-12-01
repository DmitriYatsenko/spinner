let delay = 50;
let spinnyTingz = ['|', '/', '-', '\\'];

for (let v = 0; v < Math.random() * 100; v++) {
    for (let w = 0; w < 4; w++) {
        setTimeout(() => {
            process.stdout.write(`\r${spinnyTingz[w]}`);
        }, delay);
        delay += 50;
    }
}

setTimeout(() => {
    console.log();
}, delay);