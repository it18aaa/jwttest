const data = {
    username: 'toodles'
};

let token = 0;

 fetch('http://localhost:3000/api/createNewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Success');
        token = data;
    })
    .then(()=> {
        console.log(token);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


