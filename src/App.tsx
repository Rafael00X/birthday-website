import { BirthdayPage } from "./components/birthday-page";
import { CountdownPage } from "./components/countdown-page";

const TARGET_DATE = new Date("2026-04-26T00:00:00");

export default function App() {
  if (TARGET_DATE.getTime() - new Date().getTime() > 0) {
    return <CountdownPage targetDate={TARGET_DATE} />;
  }
  return <BirthdayPage targetDate={TARGET_DATE} name="Momo" />;
}
