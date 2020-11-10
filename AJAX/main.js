$(`#btn`).on(`click`, function () {
    let book = $(`#text`).val()
    let key = 'isbn' ;

    
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${key}:${book}`, function(res){
        $(`#books`).append(`<p>${res.items[0].volumeInfo.title}</p>`)

    })
})

$(`#btn2`).on(`click`, function () {
    let book = $(`#text2`).val()
    let key = 'title' ;

    
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${key}:${book}`, function(res){
        for(let title of res.items)
        $(`#books`).append(`<p>${title.volumeInfo.title}</p>`)

    })
})



$(`#loadUsers`).on(`click`, function () {
    $.get(`https://jsonplaceholder.typicode.com/users`, function(res){
        let users = res.map(user => {return {user : user.username ,email: user.email}})
        users.forEach(user => {
            $(`#usersContainer`).append(`<p>userName : ${user.user} email: ${user.email}</p>`)
        });

    })

})


$(`#loadUserszc5`).on(`click`, function () {
    $.get(`https://jsonplaceholder.typicode.com/users`, function(res){
        let users = res.filter(u => u.address.zipcode[0] === '5').map(user => {return {user : user.username ,email: user.email}})
        users.forEach(user => {
            $(`#usersContainer`).append(`<p>userName : ${user.user} email: ${user.email}</p>`)
        });

    })

})

$(`#loadUsersnC`).on(`click`, function () {
    $.get(`https://jsonplaceholder.typicode.com/users`, function(res){
        let users = res.filter(u => u.name[0] === 'C').map(user => {return {user : user.name ,email: user.email}})
        users.forEach(user => {
            $(`#usersContainer`).append(`<p>userName : ${user.user} email: ${user.email}</p>`)
        });
    })
})


