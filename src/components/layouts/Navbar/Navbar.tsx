import NavBarClient from "./Navbar.client";
const navItems = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/portfolio",
    title: "포트폴리오 ",
  },
  {
    url: "/posts",
    title: "Posts ",
  },
  {
    url: "/board",
    title: "게시글",
  },
];

const rightItems = [
  { title: "로그인", url: "/login" },
  { title: "회원가입", url: "/register" },
];

export default function Navbar() {
  return <NavBarClient navItems={navItems} rightItems={rightItems} />;
}
