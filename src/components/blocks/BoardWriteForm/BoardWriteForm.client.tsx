"use client";

import { createBoard } from "@/services/board-service";
import { useRouter, redirect } from "next/navigation";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

type BoardInputState = {
  title: string;
  author: string;
  content: string;
};

export default function BoardWriteFormClient() {
  const [inputState, setInputState] = useState<BoardInputState>({
    title: "",
    author: "",
    content: "",
  });

  const router = useRouter();

  const onSubmit = () => {
    createBoard(inputState).then(() => {
      redirect("/board");
      //   router.replace("/board");
      //   router.push("/board");
    });
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="form.titleInput">
          <Form.Label>제목</Form.Label>
          <Form.Control
            value={inputState.title}
            onChange={(e) => {
              setInputState((prev) => ({ ...prev, title: e.target.value }));
            }}
            type="text"
            placeholder="제목을 입력해주세요."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.authorInput">
          <Form.Label>작성자</Form.Label>
          <Form.Control
            value={inputState.author}
            onChange={(e) => {
              setInputState((prev) => ({ ...prev, author: e.target.value }));
            }}
            type="text"
            placeholder="홍길동"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.contentInput">
          <Form.Label>내용</Form.Label>
          <Form.Control
            value={inputState.content}
            onChange={(e) => {
              setInputState((prev) => ({ ...prev, content: e.target.value }));
            }}
            as="textarea"
            rows={10}
          />
        </Form.Group>

        <div>
          <Button
            variant="outline-success"
            className="float-right"
            onClick={onSubmit}
          >
            작성
          </Button>
        </div>
      </Form>
    </Container>
  );
}
