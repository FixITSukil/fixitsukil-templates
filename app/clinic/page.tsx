import BusinessSite from "../components/BusinessSite";
import { clinic } from "../site-configs";

export const metadata = { title: "Medical Clinic — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={clinic} />;
}
