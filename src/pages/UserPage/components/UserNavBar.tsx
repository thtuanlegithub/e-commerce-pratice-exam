import { Button } from "antd";

function UserNavBar() {
  return (
    <div className="w-full flex flex-row h-[64px] bg-green-50 items-center justify-between px-8">
      <div className="flex flex-row items-center justify-center">
        <div>Web Logo</div>
      </div>
      <Button>Log out</Button>
    </div>
  );
}

export default UserNavBar;
