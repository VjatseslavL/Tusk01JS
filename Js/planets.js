var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Sarun", "Uranus", "Neptune"];
console.log(planets);
planets.push("Pluto");
console.log(planets);
console.log(planets.length);
const html = `
    <ul>
        <li>Name: ${planets[0]}</li>
        <li>Name: ${planets[1]}</li>
        <li>Name: ${planets[2]}</li>
        <li>Name: ${planets[3]}</li>
        <li>Name: ${planets[4]}</li>
        <li>Name: ${planets[5]}</li>
        <li>Name: ${planets[6]}</li>
        <li>Name: ${planets[7]}</li>
        <li>Name: ${planets[8]}</li>
        <li>Name: ${planets[9]}</li>
    </ul>
`;

document.body.innerHTML = html;