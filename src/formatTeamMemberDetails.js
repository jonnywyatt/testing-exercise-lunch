import { getRandomTeamMember } from './getRandomTeamMember';

export const formatTeamMemberDetails = () => {
  const teamMember = getRandomTeamMember();
  const { name, food, entertainment } = teamMember;
  return `${name} is bringing ${food} for lunch and will provide ${entertainment ? entertainment : 'nothing'} for entertainment`;
}
