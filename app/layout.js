import DockIcon from "./DockIcon";
import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Plog - 주니어 개발자의 취미",
  description: "주니어 개발자 정주현의 블로그 프로젝트",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        {children}
        <div className='iconArea'>
          <DockIcon
            imgSrc={
              "https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg"
            }
            name={"Life"}
            altName={"lifeboard"}
          />
          <DockIcon
            imgSrc={"https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg"}
            name={"Dev"}
            altName={"devboard"}
          />
        </div>
      </body>
    </html>
  );
}
