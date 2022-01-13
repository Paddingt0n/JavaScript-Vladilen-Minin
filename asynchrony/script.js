// setTimeout(function() {
//     alert('1200')
// }, 2 * 1000)

// let counter = 0
// setInterval(function() {
//     console.log(++counter)
// }, 1000*2)

/* 
  Client -> Server -> DataBase -> Server -> Client
*/

/* 
  Client -> Server -> DataBase -> Server -> Client
*/

// console.log('Клиент: хочу получить список пользователей')
// console.log('...')

// // setTimeout(function() {
// //   console.log('Сервер: запрашиваю список пользователей в БД')
// //   console.log('...')

// //   setTimeout(function() {
// //     console.log('БД: формирую список пользователей')
// //     console.log('...')

// //     setTimeout(function() {
// //       console.log('Сервер: трансформирую данные для клиента')
// //       console.log('...')

// //       setTimeout(function() {
// //         console.log('Клиент: получил данные и отображаю их')
// //       }, 1000)
// //     }, 500)
// //   }, 500)
// // }, 1000)

// var promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('Сервер: запрашиваю список пользователей в БД')
//     console.log('...')
//     resolve()
//   }, 1000)
// })

// promise.then(function() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       var users = [
//         {uid: 'id1', name: 'Maxim'},
//         {uid: 'id2', name: 'Elena'}
//       ]
//       // reject('БД не смогла получить список пользователей')
//       console.log('БД: формирую список пользователей', users)
//       console.log('...')
//       resolve(users)
//     }, 500)
//   })
// })
// .then(function(dbUsers) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       console.log('Сервер: трансформирую данные для клиента')
//       console.log('...')
//       var users = dbUsers.map(function(user) {
//         return {
//           id: user.uid,
//           firstName: user.name,
//           timestamp: Date.now()
//         }
//       })
//       resolve(users)
//     }, 500)
//   })
// })
// .then(function(users) {
//   setTimeout(function() {
//     console.log('Клиент: получил данные и отображаю их', users)
//   }, 1000)
// })
// .catch(function(error) {
//   console.error(error)
// })
// // .finally(function() {
// //   console.log('Finally')
// // })

// метод fetch

document.querySelector("#load").addEventListener("click", load);

// подход не работает во всех браузерах
// function load() {
//   var url = 'https://jsonplaceholder.typicode.com/users'
//   fetch(url)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(data) {
//       var ul = document.querySelector('#list')

//       var html = data.map(function(item) {
//         return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
//       })

//       ul.insertAdjacentHTML('afterbegin', html.join(' '))
//     })

// }

// подход работает во всех браузерах
// async function load() {
//   var url = "https://jsonplaceholder.typicode.com/users";

//   let response = await fetch(url); // в метод fetch передаем url адресс
//   let data = await response.json();

//   var html = data.map(function (item) {
//     return "<li>" + item.id + " " + item.name + " (" + item.email + ")</li>";
//   });

//   document
//     .querySelector("#list")
//     .insertAdjacentHTML("afterbegin", html.join(" "));
// }

function sleep(ms) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, ms)
    })
  }
  
  var p1 = sleep(1500).then(function() {
    return {
      name: 'Promise 1500'
    }
  })
  
  var p2 = sleep(3000).then(function() {
    return {
      name: 'Promise 3000'
    }
  })
  
  var p3 = sleep(4000).then(function() {
    return {
      name: 'Promise 4000'
    }
  })
  
  async function start() {
    var dataAll = await Promise.all([p1, p2, p3])
    
    var dataRace = await Promise.race([p1, p2])
  
    console.log('dataAll', dataAll)
    console.log('dataRace', dataRace)
  }
  
  start()
  
  