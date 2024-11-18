import { Box } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";

const CenterBody = () => {
  return (
    <Box flex={3} p={2}>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </Box>
  );
};

export default CenterBody;
