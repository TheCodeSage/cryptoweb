import {
  ICreatureFilter,
  IMarketPlaceCardData,
  IMarketplaceFilter,
  IChipData,
} from "../../interfaces";
import { CreatureEnum } from "../../enums";
import { PriceChange } from "@mui/icons-material";

export const getDefaultSearchCriteria = () => {
  const searchCriteria: IMarketplaceFilter = {
    creatureFilter: [
      {
        creature: CreatureEnum.Wolf,
        active: false,
      },
      {
        creature: CreatureEnum.Dragon,
        active: false,
      },
      {
        creature: CreatureEnum.MantisShrimp,
        active: false,
      },
    ],
    tierFilter: 0,
    priceFilter: {
      min: 0,
      max: 0,
      active: false,
    },
  };
  return searchCriteria;
};

export const onCreatureFilterChange = (
  newFilter: ICreatureFilter,
  currentFilter: IMarketplaceFilter,
  setFilter: any
) => {
  const updatedCriteria = currentFilter?.creatureFilter?.map((i) => {
    if (i.creature == newFilter.creature) {
      const update: ICreatureFilter = {
        ...newFilter,
        active: !newFilter.active,
      };
      return update;
    } else return i;
  });
  const newSearchCriteria = {
    ...currentFilter,
    creatureFilter: updatedCriteria,
  } as IMarketplaceFilter;
  setFilter(newSearchCriteria);
};

export const onTierChange = (
  newFilter: number,
  currentFilter: IMarketplaceFilter,
  setFilter: any
) => {
  const newSearchCriteria = {
    ...currentFilter,
    tierFilter: newFilter,
  } as IMarketplaceFilter;
  setFilter(newSearchCriteria);
};

export const onMinPriceChange = (
  newFilter: string,
  currentFilter: IMarketplaceFilter,
  setFilter: any
) => {
  const newSearchCriteria = {
    ...currentFilter,
    priceFilter: { min: parseInt(newFilter) },
  } as IMarketplaceFilter;
  setFilter(newSearchCriteria);
};

export const onMaxPriceChange = (
  newFilter: string,
  currentFilter: IMarketplaceFilter,
  setFilter: any
) => {
  const newSearchCriteria = {
    ...currentFilter,
    priceFilter: { max: parseInt(newFilter) },
  } as IMarketplaceFilter;
  setFilter(newSearchCriteria);
};

export const filterData = (
  filter: IMarketplaceFilter,
  data: IMarketPlaceCardData[]
) => {
  var filteredData = data;

  filteredData = filteredData.filter((i) => i.tier >= filter.tierFilter);

  if (filter.priceFilter.min > 0)
    filteredData = filteredData.filter(
      (i) => i.price >= filter.priceFilter.min
    );

  if (filter.priceFilter.max > 0)
    filteredData = filteredData.filter(
      (i) =>
        i.price >= Math.max(filter.priceFilter.min ?? 0, filter.priceFilter.max)
    );

  const activeCreatureFilters = filter.creatureFilter
    .filter((i) => i.active)
    .map((i) => i.creature);
  if (activeCreatureFilters.length > 0) {
    filteredData = filteredData.filter((i) =>
      activeCreatureFilters.includes(i.name)
    );
  }

  return filteredData;
};

export const getSearchFilterChips = (
  filter: IMarketplaceFilter
): IChipData[] => {
  var chips: IChipData[] = [];
  var keyIter = 0;
  const pushChip = (text: string) => {
    chips.push({ key: keyIter++, label: text });
  };
  //Add creature chip
  filter.creatureFilter
    .filter((i) => i.active)
    .reverse()
    .forEach((ii) => pushChip("Type: " + ii.creature));
  //Add min price chip
  if (filter.priceFilter.min) pushChip("Min: " + filter.priceFilter.min);
  //Add max price chip
  if (filter.priceFilter.max) pushChip("Max: " + filter.priceFilter.max);
  //Add tier chip
  if (filter.tierFilter) pushChip("Tier: " + filter.tierFilter.toString());

  if (chips.length <= 0) pushChip("Select a filter");

  return chips;
};
