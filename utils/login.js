const data = {
    username: 'toodles'
};

fetch('http://localhost:3000/api/createNewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Success', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });