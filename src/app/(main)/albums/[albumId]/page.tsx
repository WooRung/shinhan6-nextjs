import AlbumItem from "@/components/blocks/AlbumItem";

// 2가지 방법.
// 1. SSR (ServerSideRendering)
// 2. CSR (ClientSideRendering)

type AlbumDetailPageProps = {
  params: Promise<{
    albumId: string;
  }>;
};

export default async function AlbumDetailPage({
  params,
}: AlbumDetailPageProps) {
  const { albumId } = await params;

  return <AlbumItem albumId={albumId} />;
}
