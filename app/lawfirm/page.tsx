import BusinessSite from "../components/BusinessSite";
import { lawfirm } from "../site-configs";

export const metadata = { title: "Law Firm — Demo Template | Fix It Sukil Web Design" };

export default function Page() {
  return <BusinessSite c={lawfirm} />;
}
