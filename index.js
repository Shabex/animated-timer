const counters = document.querySelectorAll('.counter');
const subscribers = document.querySelector('.subscribers')
const followers = document.querySelector('.followers')
const likes = document.querySelector('.likes')
const connections = document.querySelector('.connections')
// const speed = 2000;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target')
//         const count = +counter.innerText

//         const inc = target/speed;

//         console.log(count)

//         if(count < target) {
//             counter.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1);
//         } else {
//             count.innerText = target;
//         }
//     }

//     updateCount();
// });

let count = 1;

counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    setInterval(() => {
       if (count < target) {
        count++;
        counter.innerText = Math.ceil(count);
       }
    }, 10);
})

setTimeout(() => {
    subscribers.innerText = "Subscribers in Youtube!"
}, 9000);

setTimeout(() => {
    followers.innerText = "Followers on Twitter!"
}, 9000);

setTimeout(() => {
    likes.innerText = "Likes on Facebook!"
}, 9000);

setTimeout(() => {
    connections.innerText = "Connections on LinkedIn!"
}, 7000);