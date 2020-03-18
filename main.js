//Belajar var dan cost
//ES5
// var myName = "Ray Rona"; //var type data bisa dirubah
// myName = "Kenur"
// myName = "Fafa"
// console.log(myName);

//ES6
// const myCar = "Xpander"; //cost tipe data tidak bisa dirubah
// myCar = "Agya";
// console.log(myCar);




//Belajar Let
//ES5
// var myCars = ['BMW', 'Mazda', 'Toyota'];

// for (var i = 0; i < myCars.length; i++) {
//     console.log(myCars[i]);
// }
// console.log(i);

//ES6
// let myCars = ['BMW', 'Mazda', 'Toyota']; //tipe data dapat dirubah pake let

// for (let i = 0; i < myCars.length; i++) {
//     console.log(myCars[i]);
// }
// console.log(i);




//Belajar Congcat
// ambil element
// const user_place = document.getElementById('user');

//ES5
// const user_logged = "Tony";
// user_place.innerHTML = "Hi," + user_logged + " Apa kabar?";

//ES6
// const user_logged = "Tony";
// user_place.innerHTML = `Hi, ${user_logged}. Apa Kabar?`;




//Belajar Object Literal
//ambil element
// const cart_items = document.getElementById('cart');

//ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("Iphone 11", "Gadget");
// console.log(getProduct);

//ES6
// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct("Iphone 11", "Gadget");
// cart_items.innerHTML = `Product:${getProduct.name} Category:${getProduct.category}`




//Belajar Array For Each
// ambil element
// const skills_holder = document.getElementById('skills');

//ES5

//ES6
// const yourskills = ['UX Design', 'Web Developer', 'Web Design']

// let parent = `<ul>`;

// yourskills.forEach((skill) => {
//     parent += `<li>` + skill + `</li>`;
//     console.log(`${skill}`);
// });

// parent += `</ul>`;
// skills_holder.innerHTML = parent;




//Belajar Map FIlter
// ambil element
// const skills_holder = document.getElementById('skills');

//ES5

//ES6
// const yourskills = ['UX Design', 'Web Developer', 'Web Design']

// const myPrimarySkill = yourskills.filter(skill => {
//     return skill === "Web Design";
// });

// skills_holder.innerHTML = myPrimarySkill;




//Belajar Clasess
// ambil element
// const data = document.getElementById('data');

//ES5

//ES6
// modul untuk member kelas
// class Siswa {
//     constructor(username, password, id_kelas) {
//         this.username = username;
//         this.password = password;
//         this.id_kelas = id_kelas;
//     }
//     gabung() {
//         console.log(this.username + ' telah bergabung pada kelas ' + this.id_kelas);
//     }
// }

// let tambahSiswa = new Siswa('admin', 'admin', 'web design');
// tambahSiswa.gabung();



//Belajar Inheritance
// ambil element
const data = document.getElementById('data');

//ES5

//ES6
// modul untuk member kelas
class Siswa {
    constructor(username, password, id_kelas) {
        this.username = username;
        this.password = password;
        this.id_kelas = id_kelas;
    }
    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.id_kelas);
    }
}

// let tambahSiswa = new Siswa('admin', 'admin', 'web design');
// tambahSiswa.gabung();

class langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi, ' + this.username + ' telah langganan paket ' + this.paket);
    }
}

let tambahLangganan = new langganan('Ray rona', 'Premium');
tambahLangganan.gabungPaket();