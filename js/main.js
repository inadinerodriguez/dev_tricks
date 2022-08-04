const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
//console.log(`Hello I am a ${}`);

    // Styled
console.log("%c I am some great text", "font-size:50px; background:red; test-shadow: 10px 10px 0 blue");
    // warning!
console.warn("Oh Nooooo!");

    // Error :|
    console.error("Oh Shit!!!");

    // Info

    console.info("Crocodiels eat 3-4 people per year!");

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), "That is wrong!!");
    console.assert(1 === 2, "That is wrong!");

    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count("Dog");
    console.count("Dog");
    console.count("Cat");
    console.count("Dog");
    console.count("Dog");
    console.count("Dog");
    console.count("Cat");
    console.count("Cat");
    console.count("Cat");
    console.count("Cat");
    console.count("Cat");
    console.count("Dog");
    console.count("Dog");
    console.count("Dog");
    console.count("Dog");

    // timing

    console.time("fetching data");
    fetch("https://api.github.com/users/inadinerodriguez")
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data);
        });
    
    //
    console.table(dogs);