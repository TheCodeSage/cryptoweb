import {
  Box,
  Checkbox,
  Grid,
  List,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  IMarketplaceFilter,
  ICreatureFilter,
  IMarketplaceSearchProps,
} from "../../interfaces";
import {
  getDefaultSearchCriteria,
  onCreatureFilterChange,
  onTierChange,
  onMinPriceChange,
  onMaxPriceChange,
} from "../Marketplace/marketplaceHelper";

export const MarketPlaceSearch = ({
  searchFilter,
  setSearchFilter,
}: IMarketplaceSearchProps) => {
  return (
    <Grid container spacing={5} padding={2} alignItems="center">
      <Grid item>
        <Stack>
          <Typography>Creatures: </Typography>
          <List>
            {searchFilter.creatureFilter.map(
              (item: ICreatureFilter, idx: number) => (
                <Stack key={idx} direction="row" alignItems="center">
                  <Checkbox
                    checked={item.active}
                    onChange={() =>
                      onCreatureFilterChange(
                        item,
                        searchFilter,
                        setSearchFilter
                      )
                    }
                  />
                  <Typography>{item.creature}</Typography>
                </Stack>
              )
            )}
          </List>
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row">
          <Typography>Tier:</Typography>
          <Rating
            value={searchFilter.tierFilter}
            onChange={(e, newValue) =>
              onTierChange(newValue ?? 0, searchFilter, setSearchFilter)
            }
          />
        </Stack>
      </Grid>

      <Grid item>
        <Stack direction="row" alignItems="center">
          <Typography>Price:</Typography>
          <TextField
            type="number"
            value={searchFilter.priceFilter.min ?? 0}
            variant="outlined"
            label="min"
            sx={{ width: "100px" }}
            onChange={(e) =>
              onMinPriceChange(
                e.target.value,
                searchFilter,
                setSearchFilter
              )
            }
          />
          -
          <TextField
            type="number"
            value={searchFilter.priceFilter.max}
            variant="outlined"
            label="max"
            sx={{ width: "100px" }}
            onChange={(e) =>
              onMaxPriceChange(
                e.target.value,
                searchFilter,
                setSearchFilter
              )
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
