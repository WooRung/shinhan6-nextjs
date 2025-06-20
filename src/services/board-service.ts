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
