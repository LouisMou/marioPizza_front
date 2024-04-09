import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Pizza from "../../models/pizza";

import "./style.css";
import { useTranslation } from "react-i18next";

interface Props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Card className="pizzaCard" elevation={10}>
        <CardHeader title={"#" + pizza.id.toString().padStart(4, "0")} />
        <CardMedia component="img" image={pizza.image} alt={pizza.name} />
        <CardContent>
          <Typography variant="h3">{pizza.id}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PizzaCard;
