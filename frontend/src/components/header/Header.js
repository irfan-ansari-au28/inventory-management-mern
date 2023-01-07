import { Button } from "@material-tailwind/react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div>Welcome</div>
        <div>User</div>
      </div>
      <div>
        <Button variant="gradient" fullWidth>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
