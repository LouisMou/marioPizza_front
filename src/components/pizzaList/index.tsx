import { Box } from "@mui/material";
import Pizza from "../../models/pizza";
import PizzaCard from "../pizzaCard";
import "./style.css";

interface Props {
  pizzas: Pizza[] | undefined;
}

const PizzaList = ({ pizzas }: Props) => {
  return (
    <Box className="pizzaList">
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        gap="20px"
        justifyContent="space-around"
        id="list"
      >
        {pizzas?.map((pizza: Pizza, index: number) => (
          <article>
            <PizzaCard pizza={pizza} />
          </article>
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
