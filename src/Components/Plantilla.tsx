import { useState } from "react";
import Button from "../Components/ButonCard"; // Verifica el nombre del archivo ButtonCard

interface Props {
  title: string;
  content: string;
  content2: string;
}

const initialdata: Props[] = [
  {
    title: "Dachshund",
    content:
      "Also known as the Wiener dog, badger dog, or sausage dog, this breed is characterized by its short legs and long body. It is a hound-type dog that may have smooth, wire, or long hair.",
    content2:
      "The standard-sized dachshund was developed to scent, chase, and flush out badgers and other burrow-dwelling animals, while the miniature dachshund was bred to hunt small animals such as rabbits and mice.",
  },
  {
    title: "Corgi",
    content:
      "The Welsh Corgi, or simply Corgi (plural: Corgis), is a small breed of herding dog that originated in Wales.",
    content2:
      "There are two separate breeds recognized: the Pembroke Welsh Corgi and the Cardigan Welsh Corgi. Overall, the Cardigan is larger, both in weight and height. Their tails also differ in shape.",
  },
  {
    title: "Mongrel",
    content:
      "A mongrel, mutt, or mixed-breed dog is a dog that does not belong to one officially recognized breed and is not the result of intentional breeding.",
    content2:
      "Although mongrels are viewed as having less commercial value than intentionally bred dogs, they are thought to be less susceptible to genetic health problems associated with inbreeding.",
  },
];

const Plantilla = () => {
  const [datatest, setText] = useState(initialdata);
  return (
    <>
      {datatest.map((datos, index) => (
        <div key={index}>
          <h1 className="">{datos.title}</h1> {/* Asegúrate de usar clases CSS válidas */}
          <p>{datos.content}</p>
          <p>{datos.content2}</p>
          <Button /> {/* Solo lo llamas, no necesitas pasar nada si no hay props */}
        </div>
      ))}
    </>
  );
};

export default Plantilla;
