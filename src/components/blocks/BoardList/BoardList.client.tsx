"use client";
import { fetchBoardList } from "@/services/board-service";
import type { Board } from "@/types/api/board";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

type BoardListClientProps = {
  boardList?: Board[];
};

export default function BoardListClient({
  boardList = [],
}: BoardListClientProps) {
  const [boardArr, setBoardArr] = useState(boardList);

  useEffect(() => {
    fetchBoardList().then((data) => {
      setBoardArr(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold">게시글 리스트</h1>
        <div>
          <ListGroup>
            {boardArr.map((board) => {
              return (
                <ListGroup.Item key={board._id}>
                  <div className="flex flex-row justify-between">
                    <div>{board.title}</div>
                    <div>{board.createdAt}</div>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <ul></ul>
      </Container>
    </div>
  );
}
