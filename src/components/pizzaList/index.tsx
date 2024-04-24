import { Box, Typography } from "@mui/material";
import Pizza from "../../models/pizza";
import PizzaCard from "../pizzaCard";
import "./style.css";
import { useState } from "react";

interface Props {
  pizzas: Pizza[] | undefined;
}

const PizzaList = ({ pizzas }: Props) => {
  const [total, setTotal] = useState<number>(0);

  const resetTotal = () => {
    setTotal(0);
  };

  const updateTotal = (price: number) => {
    setTotal((basket) => basket + price);
  };
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
            <PizzaCard
              pizza={pizza}
              updateTotal={updateTotal}
              resetTotal={resetTotal}
            />
          </article>
        ))}
        <Typography>Total Price: {total}</Typography>
      </Box>
    </Box>
  );
};

export default PizzaList;
