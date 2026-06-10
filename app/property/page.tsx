import BusinessSite from "../components/BusinessSite";
import { property } from "../site-configs";

export const metadata = { title: "Property Agent — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={property} />;
}
