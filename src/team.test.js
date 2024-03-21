import { formatTeamMemberDetails } from "./formatTeamMemberDetails";
describe("Team", () => {
  it("should format team member details", () => {
    const lunch = formatTeamMemberDetails();
    expect(lunch).toBe("Alice, Bob, Charlie, David, Eve");
  });
});
