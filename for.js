let name = ["Alice", "Bob", "Charlie", "David", "Eve"]
for (let i = 0; i < name.length; i++) {
    if (name[i].length > 6) {
        console.log('สวัสดีคุณ ' + name[i]);
    } else {
        console.log('Hello ' + name[i]);
    }
}