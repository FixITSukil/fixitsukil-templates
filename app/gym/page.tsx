import BusinessSite from "../components/BusinessSite";
import { gym } from "../site-configs";

export const metadata = { title: "Gym & Fitness — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={gym} />;
}
