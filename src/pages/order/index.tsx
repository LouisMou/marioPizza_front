import PizzaList from "../../components/pizzaList";
import Pizza from "../../models/pizza";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PizzaService from "../../services/PizzaService";

const Order = () => {
  const { t } = useTranslation();

  const [pizzaOrigin, setPizzaOrigin] = useState<Pizza[]>([]);
  const [pizzaL, setPizzaL] = useState<Pizza[]>([]);

  const [sortBy] = useState<string>("id");
  const [sortDirection] = useState<number>(1);

  /* met à jour la liste des pokemons avec un pokemon modifié */

  useEffect(() => {
    // on repart de la liste complète des pokémons et on la fitre en fonction de searchText

    PizzaService.getAll().then((value) => setPizzaOrigin(value));
  });

  useEffect(() => {
    // la liste filtrée est ensuite triée
    let tempSorted: Pizza[] = pizzaOrigin.sort((a: Pizza, b: Pizza) => {
      let valA: number | string = a.id;
      let valB: number | string = b.id;

      if (sortBy === "name") {
        valA = t("pokemon." + a.id);
        valB = t("pokemon." + b.id);
      }
      return valA > valB ? sortDirection : -sortDirection;
    });

    // le résultat obtenu est mis dans pokemonL qui est la liste des pokémons affichés
    setPizzaL(tempSorted);
  }, [sortBy, sortDirection, pizzaOrigin, t]);

  return (
    <>
      <PizzaList pizzas={pizzaL} />
    </>
  );
};

export default Order;
