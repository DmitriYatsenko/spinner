let delay = 50;

for (let i = 0; i < Math.random() * 100; i++) {
    setTimeout(() => {
        process.stdout.write('\r|   ');
    }, delay);

    setTimeout(() => {
        process.stdout.write('\r/   ');
    }, delay + 50);

    setTimeout(() => {
        process.stdout.write('\r-   ');
    }, delay + 100);

    setTimeout(() => {
        process.stdout.write('\r\\   ');
    }, delay + 150);

    delay += 200;
}

setTimeout(() => {
    console.log();
}, delay);