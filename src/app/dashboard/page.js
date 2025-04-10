import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Truck Dispatcher",
  description: "This is Truck Dispatcher Dashboard Admin.",
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
