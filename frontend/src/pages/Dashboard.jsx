import { useState } from "react";
import {
  Boxes,
  Warehouse,
  Truck,
  FileText,
  ShoppingCart,
  Bell,
  UserCircle,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const sidebarTabs = [
  { name: "Product Management", icon: <Boxes size={20} /> },
  { name: "Inventory Management", icon: <Warehouse size={20} /> },
  { name: "Delivery & Shipment", icon: <Truck size={20} /> },
  { name: "Payments & Invoices", icon: <FileText size={20} /> },
  { name: "Purchase Orders", icon: <ShoppingCart size={20} /> },
  { name: "Notifications", icon: <Bell size={20} /> },
];
const profileTab = { name: "Profile", icon: <UserCircle size={20} /> };

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarTabs={sidebarTabs}
        profileTab={profileTab}
      />
      {/* Main Content (scrollable) */}
      <main
        className="flex-1 p-8 ml-16 md:ml-56 overflow-y-auto min-h-screen"
        style={{
          marginLeft: collapsed ? "4rem" : "14rem",
          transition: "margin-left 0.3s",
        }}
      >
        <h1 className="text-3xl font-bold mb-6">
          {activeTab === "profile"
            ? profileTab.name
            : sidebarTabs[activeTab].name}
        </h1>
        {/* Content for the selected tab can go here */}
      </main>
    </div>
  );
};

export default Dashboard;
