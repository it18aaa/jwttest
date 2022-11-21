fetch('http://localhost:3000/api/help')
    .then((res) => res.json())
    .then((data) => {
        console.log(`Result is:`);
        console.log(data);

        console.log(data.text);
    });