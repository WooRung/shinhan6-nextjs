import BoardList from "@/components/blocks/BoardList";
import React from "react";
import { Container } from "react-bootstrap";

type Props = {};

export default function BoardListPage({}: Props) {
  return (
    <div>
      <BoardList />
    </div>
  );
}
