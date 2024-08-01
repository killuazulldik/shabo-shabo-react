function getRandomAge() {
  return Math.floor(Math.random() * 51) + 20;
}
function Citizens() {
  return [
    {
      name: "Ariel",
      age: getRandomAge(),
      address: "Basak",
      status: "Active",
    },
    {
      name: "juwan",
      age: getRandomAge(),
      address: "Kaulosan",
      status: "Active",
    },
    {
      name: "juan",
      age: getRandomAge(),
      address: "Kadidoy",
      status: "Active",
    },
    {
      name: "john",
      age: getRandomAge(),
      address: "Pangpang",
      status: "Active",
    },
    {
      name: "jhon",
      age: getRandomAge(),
      address: "Kangdampas",
      status: "Active",
    },
    {
      name: "Juwanso",
      age: getRandomAge(),
      address: "Kamborha",
      status: "Active",
    },
    {
      name: "Wanso",
      age: getRandomAge(),
      address: "Kamburha",
      status: "Inactive",
    },
    {
      name: "So",
      age: getRandomAge(),
      address: "Basak",
      status: "Inactive",
    },
    {
      name: "Nikoy",
      age: getRandomAge(),
      address: "Basak",
      status: "Inactive",
    },
    {
      name: "Karangas",
      age: getRandomAge(),
      address: "Basak",
      status: "Inactive",
    },
  ];
}
export default Citizens;
