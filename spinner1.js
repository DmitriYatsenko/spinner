let delay = 100
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        process.stdout.write('\r|   ');
    }, delay);

    setTimeout(() => {
        process.stdout.write('\r/   ');
    }, delay + 100);

    setTimeout(() => {
        process.stdout.write('\r-   ');
    }, delay + 200);

    setTimeout(() => {
        process.stdout.write('\r\\   ');
    }, delay + 300);

    delay += 400;
}

setTimeout(() => {
    console.log();
}, delay);