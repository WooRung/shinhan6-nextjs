// /app/(main)/layout.tsx
// -> /app/(main) 아래 존재하는 모든 페이지들이 공유할 레이아웃
import Navbar from "@/components/layouts/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <div className="mt-8 text-center bg-red-200">메인 레이아웃 Footer</div>
      </div>
    </AuthProvider>
  );
}
