"use client";
import { fetchBoard } from "@/services/board-service";
import type { Board } from "@/types/api/board";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
      <div style={{ minHeight: 500 }} className="p-6 border-2 border-gray-300">
        {boardData?.content}
      </div>
    </Container>
  );
}
