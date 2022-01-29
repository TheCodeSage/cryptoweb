import { SkillEnum } from "./enums";

export function skillName(skill: SkillEnum): string {
  switch (skill) {
    case SkillEnum.juicyWiggle:
      return "Juicy Wiggle";
    case SkillEnum.pimpSmack:
      return "Pimp Smack";
    case SkillEnum.rockHard:
      return "Rock Hard";
    default:
      return "";
  }
}
export function skillDescription(skill: SkillEnum): string {
  switch (skill) {
    case SkillEnum.juicyWiggle:
      return "Increases speed based on tier";
    case SkillEnum.pimpSmack:
      return "Increases attack based on tier";
    case SkillEnum.rockHard:
      return "Increases defense based on tier";

    default:
      return "";
  }
}
