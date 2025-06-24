"use client";
import { fetchBoard } from "@/services/board-service";
import type { Board } from "@/types/api/board";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

export default function BoardItemClient({
  board = null,
}: {
  board?: Board | null;
}) {
  const [boardData, setBoardData] = useState<Board | null>(board);
  const { boardId } = useParams<{ boardId: string }>();

  useEffect(() => {
    if (boardId) {
      fetchBoard(boardId).then((data) => {
        setBoardData(data);
      });
    }
  }, [boardId]);

  return (
    <Container>
      <h3 className="text-3xl">{boardData?.title}</h3>

      <div className="mt-3 border-top pt-3">
        <div className="d-flex justify-content-end">
          <ButtonGroup>
            <Button variant="outline-primary">수정</Button>
            <Button variant="outline-danger">삭제</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between border-2 border-gray-100 rounded-3 p-3 mb-3 min-h-[500px]">
          {boardData?.content}
        </div>
      </div>
    </Container>
  );
}
