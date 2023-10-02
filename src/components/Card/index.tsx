import { Book } from "@/models";

interface CardType {
  info: Book;
}

export const Card: React.FC<CardType> = ({ info }) => {
  return (
    <div>
      <div>{info.name}</div>
      <div>{info.author.name}</div>
    </div>
  );
};
