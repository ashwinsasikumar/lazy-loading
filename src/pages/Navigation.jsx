import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Navigation.module.css";
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className={styles.top}>
      <Button Name={"Home"} Click={() => navigate("/lazy-loading")} />
      <Button Name={"About"} Click={() => navigate("/lazy-loading/About")} />
    </div>
  );
}
