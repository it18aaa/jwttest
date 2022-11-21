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
        console.log(`Using token ${token}`);
        // navigate to a route that requires the JWT to see

        fetch('http://localhost:3000/api/authenticatedRoute', 
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("things happened")
        });      
    })
    .catch((error) => {
        console.error('Error:', error);
    });


