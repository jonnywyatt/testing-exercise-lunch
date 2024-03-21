const teamMembers = [
  {
    name: 'Jane',
    food: 'Pasta',
    entertainment: 'Juggling'
  },
  {
    name: 'John',
    food: 'Pizza',
    entertainment: 'Fortune telling'
  },
  {
    name: 'Dave',
    food: 'Thai',
  },
  {
    name: 'Abi',
    food: 'West African',
  }
];

export const getRandomTeamMember = () => {
  const randomIndex = Math.floor(Math.random() * teamMembers.length);
  return teamMembers[randomIndex];
}
