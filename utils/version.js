fetch('http://localhost:3000/api/version')
    .then((res) => res.json())
    .then((data) => {
        console.log(`Result is:`);
        console.log(data);
    });