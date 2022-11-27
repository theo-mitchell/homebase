import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer = () => {
  return (
    <footer className="flex-auto flex items-center justify-center">
      <Link className="p-2"href="https://www.linkedin.com/in/theodore-mitchell/">
        <LinkedInIcon />
      </Link>
      <Link className="p-2" href="https://github.com/theo-mitchell">
        <GitHubIcon />
      </Link>
      <Link className="p-2" href="mailto: abc@example.com">
        <AlternateEmailIcon />
      </Link>
    </footer>
  );
};

export default Footer;
