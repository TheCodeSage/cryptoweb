import { IconButtonProps } from "@mui/material/IconButton";
import { CreatureEnum, SkillEnum } from "./enums";

export interface NavigationProps {
  pageNames: string[];
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface DashboardCardProps {
  id?: number;
  title: string;
  subtitle: string;
  img?: string;
  description: string;
  likes: number;
  alignment?: boolean | undefined;
}

export interface StyleProps {
  alignment?: boolean | undefined;
}

export interface ICreatureFilter {
  creature: CreatureEnum;
  active: boolean;
}

export interface IMarketplaceFilter {
  creatureFilter: ICreatureFilter[];
  tierFilter: number;
  priceFilter: {
    min: number;
    max: number;
    active: boolean;
  };
}

export interface ICreature {
  name: CreatureEnum;
  img: string;
  appearance?: IAppearance | null;
  attributes: IAttributes;
  tier: number;
}

export interface IAttributes {
  attackFloor: number;
  attackCeiling: number;
  defense: number;
  speed: number;
  skill: SkillEnum;
}

export interface ISkill {
  skill: SkillEnum;
  description: string;
}

export interface IAppearance {
  background: string;
  head: string;
  body: string;
  legs: string;
  arms: string;
  headAccessory: string;
  bodyAccessory: string;
  legAccessory: string;
  armAccessory: string;
}

export interface IMarketPlaceCardData extends ICreature {
  price: number;
}

export interface IDrawerFlyoutProps {
  searchFilter: IMarketplaceFilter;
  setSearchFilter: any;
}
export interface IMarketplaceSearchProps {
  searchFilter: IMarketplaceFilter;
  setSearchFilter: any;
}

export interface IChipData {
  key: number;
  label: string;
}
