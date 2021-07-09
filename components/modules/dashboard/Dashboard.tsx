import DashboardLayout from "../../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout slotOne={<div>Hej 1</div>} slotTwo={<div>Hej 2</div>} />
  );
}
