import "./Best.scss";
import DrinkCard from "../../components/DrinkCard/DrinkCard";

const Best = () => {
  const drinks = [
    {
      name: "Margarita",
      image:
        "https://www.recetasderechupete.com/wp-content/uploads/2020/06/Margarita.jpg",
      ingredients: ["Tequila", "Jugo de limón", "Jarabe de agave", "Hielo"],
      instructions: [
        "Mezcla todos los ingredientes en una coctelera.",
        "Sirve en un vaso con hielo.",
        "Decora con una rodaja de limón.",
      ],
    },
    {
      name: "Piña Colada",
      image:
        "https://coctelia.com/wp-content/uploads/2018/05/pina-colada-coctel-2.jpg",
      ingredients: ["Ron blanco", "Piña", "Crema de coco", "Hielo"],
      instructions: [
        "Coloca todos los ingredientes en una licuadora.",
        "Mezcla hasta obtener una consistencia suave.",
        "Sirve en un vaso y decora con una rodaja de piña y una cereza.",
      ],
    },
    {
      name: "Mojito",
      image:
        "https://cocina-casera.com/wp-content/uploads/2017/07/como-hacer-mojito-casero.jpg",
      ingredients: [
        "Ron blanco",
        "Menta fresca",
        "Jugo de limón",
        "Azúcar",
        "Agua con gas",
        "Hielo",
      ],
      instructions: [
        "En un vaso, machaca la menta con el azúcar y el jugo de limón.",
        "Añade el ron y mezcla bien.",
        "Agrega hielo y completa con agua con gas.",
        "Decora con una ramita de menta y una rodaja de limón.",
      ],
    },
    {
      name: "Caipirinha",
      image:
        "https://www.comedera.com/wp-content/uploads/2022/04/caipirina.png",
      ingredients: ["Cachaça", "Limón", "Azúcar", "Hielo"],
      instructions: [
        "Corta el limón en trozos y colócalos en un vaso.",
        "Agrega el azúcar y machaca suavemente con un mortero.",
        "Añade la cachaça y mezcla bien.",
        "Agrega hielo y mezcla nuevamente.",
      ],
    },
    {
      name: "Daiquiri",
      image:
        "https://www.tucocteleria.com/wp-content/uploads/2018/04/Daiquiri.jpg",
      ingredients: ["Ron blanco", "Jugo de limón", "Azúcar", "Hielo"],
      instructions: [
        "En una coctelera, mezcla todos los ingredientes con hielo.",
        "Agita bien y cuela en una copa de cóctel.",
        "Decora con una rodaja de limón.",
      ],
    },
    {
      name: "Negroni",
      image:
        "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/05/coctel-negroni-italiano.jpg",
      ingredients: ["Ginebra", "Campari", "Vermú rojo", "Hielo"],
      instructions: [
        "En un vaso mezclador, agrega hielo, ginebra, Campari y vermú rojo.",
        "Remueve bien para mezclar los ingredientes.",
        "Sirve en un vaso old-fashioned con hielo.",
        "Decora con una rodaja de naranja.",
      ],
    },
  ];

  return (
    <div className="best">
      <h1>Especialidades</h1>
      {drinks.map((drink, key) => (
        <DrinkCard
          name={drink.name}
          image={drink.image}
          ingredients={drink.ingredients}
          instructions={drink.instructions}
        />
      ))}
    </div>
  );
};

export default Best;
