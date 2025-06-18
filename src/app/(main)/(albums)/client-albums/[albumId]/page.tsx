"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Album = {
  id: number;
  title: string;
};

export default function ClientAlbumsDetailPage() {
  // URL Parameter 전달받는 2가지 방법.
  // 1. props.params로 전달받기 (서버 컴포넌트)
  // 2. useParams 훅 사용 (클라이언트 컴포넌트)

  const params = useParams();
  const { albumId } = params;
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setAlbum(data);
      });
  }, []);

  return (
    <div>
      page
      <h1>ClientSide:</h1>
      {/* <p>{album ? album.title : null}</p> */}
      <p>{album && album.title}</p>
    </div>
  );
}
