waitAndPrint = (message, Delay) => {
    let count = 1;
    setInterval(() => {
        console.log(message + ' world!'.repeat(count));
        count++;
    }, Delay);
}

waitAndPrint('Hello,', 3000);