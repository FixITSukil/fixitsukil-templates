import BusinessSite from "../components/BusinessSite";
import { restaurant } from "../site-configs";

export const metadata = { title: "Café & Restaurant — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={restaurant} />;
}
