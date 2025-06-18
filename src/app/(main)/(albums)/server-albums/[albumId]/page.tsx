type ServerAlbumsDetailPageProps = {
  params: Promise<{
    albumId: string;
  }>;
};
type Album = {
  title: string;
  id: number;
};

export default async function ServerAlbumsDetailPage({
  params,
}: ServerAlbumsDetailPageProps) {
  // URL Parameter 전달받는 2가지 방법.
  // 1. props.params로 전달받기 (서버 컴포넌트)
  // 2. useParams 훅 사용 (클라이언트 컴포넌트)

  const { albumId } = await params;

  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const album: Album = await resp.json();

  return (
    <div>
      <p>앨범 제목: {album.title}</p>
    </div>
  );
}
