import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
import { useEffect, useState } from "react";
import PizzaService from "../../services/PizzaService";

const Order = () => {
  const [pizzaL, setPizzaL] = useState<Pizza[]>([]);

  useEffect(() => {
    PizzaService.getAll().then((value) => setPizzaL(value));
  }, []);

  return (
    <>
      <PizzaList pizzas={pizzaL} />
    </>
  );
};

export default Order;
