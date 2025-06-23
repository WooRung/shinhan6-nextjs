import type { Board } from "@/types/api/board";

/**
 * proxy 사용.
 */
// export async function fetchBoardList(): Promise<Board[]> {
//   const resp = await fetch("/api/board");
//   const data = await resp.json();

//   return data as Board[];
// }

/**
 * Server Cors설정후
 */
export async function fetchBoardList(): Promise<Board[]> {
  const resp = await fetch("http://localhost:3001/api/board");
  const data = await resp.json();

  return data as Board[];
}

export async function fetchBoard(boardId: string): Promise<Board> {
  console.log(boardId);
  const resp = await fetch(`http://localhost:3001/api/board/${boardId}`);
  const data = await resp.json();
  return data;
}

export async function createBoard(data: {
  title: string;
  author: string;
  content: string;
}) {
  const resp = await fetch("http://localhost:3001/api/board", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.json();
}
