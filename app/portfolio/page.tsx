import BusinessSite from "../components/BusinessSite";
import { portfolio } from "../site-configs";

export const metadata = { title: "Personal Portfolio — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={portfolio} />;
}
