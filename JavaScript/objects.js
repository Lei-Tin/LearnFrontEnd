let country = {
    name: "Netherlands",
    population: 17.18
}

console.log(country.name);

country.name = "Banana";

console.log(country.name);

delete country.name;

console.log(country);
country.name = "Restored";
console.log(country);

// Access non-existent property
console.log(country.size);