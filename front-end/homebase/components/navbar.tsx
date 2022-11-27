import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, Button } from "@mui/material";
import Link from "next/link";

const Navbar = (props: any) => {
  return (
    <AppBar position="fixed">
      <Toolbar className="flex space-x-5">
        <Button className="p-5" variant="contained" color="primary">
          <Link href="/">MAIN</Link>
        </Button>
        <Button className="p-5" variant="contained" color="primary">
          <Link href="./blog">BLOG</Link>
        </Button>
        <Button className="p-5" variant="contained" color="primary">
          <Link href="./contact">CONTACT</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
