import BoardItemClient from "./BoardItem.client";

type Props = {
  boardId: string;
};

export default function BoardItem({ boardId }: Props) {
  return <BoardItemClient />;
}
