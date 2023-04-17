import DockIcon from "./DockIcon";

export default function Dock() {
  return (
    <div className='dock-div'>
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
  );
}
