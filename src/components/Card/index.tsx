import { BookInfo } from "@/models";

interface CardType {
  info: BookInfo;
}

export const Card: React.FC<CardType> = ({ info }) => {
  return (
    <div>
      <div>{info.name}</div>
      <div>{info.author}</div>
      <div>{info.interview.guest}</div>
      <div>{info?.tags}</div>
    </div>
  );
};
