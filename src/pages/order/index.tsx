import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PizzaService from "../../services/PizzaService";

const Order = () => {
  const { t } = useTranslation();

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
