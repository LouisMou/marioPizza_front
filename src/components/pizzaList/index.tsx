import { Box, Slide } from "@mui/material";
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
        flexWrap="wrap"
        gap="20px"
        justifyContent="space-around"
        id="list"
      >
        {pizzas?.map((pizza: Pizza, index: number) => (
          <Slide
            in={true}
            timeout={(index + 1) * 20}
            style={{ transformOrigin: "0 0 0" }}
            key={"zoom" + pizza.id}
          >
            <article>
              <PizzaCard pizza={pizza} />
            </article>
          </Slide>
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
