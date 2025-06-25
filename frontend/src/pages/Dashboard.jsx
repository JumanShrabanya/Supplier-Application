import { useState } from "react";
import {
  Boxes,
  Warehouse,
  Truck,
  FileText,
  ShoppingCart,
  Bell,
  UserCircle,
  LogOut,
} from "lucide-react";

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
      {/* Fixed Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-20 flex flex-col justify-between h-screen py-4 bg-white/80 shadow-xl rounded-r-2xl border border-gray-100 transition-all duration-300
          ${collapsed ? "w-16 items-center" : "w-56 items-start"}`}
        style={{ minHeight: "100vh" }}
      >
        <div
          className={`flex flex-col ${
            collapsed ? "items-center" : "items-start"
          } gap-4 w-full`}
        >
          {/* Toggle Button & Logo */}
          <div
            className={`flex items-center w-full mb-6 px-2 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            <span
              className={`block ${
                collapsed ? "hidden" : "w-auto h-10"
              } rounded-3xl flex items-center justify-center text-black text-xl uppercase font-bold pl-2`}
            >
              Supplier
            </span>
            <button
              className="ml-2 p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-all"
              onClick={() => setCollapsed((c) => !c)}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {/* Simple chevron icon using SVG */}
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  collapsed ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          {/* Tabs */}
          <nav
            className={`flex flex-col gap-2 w-full ${
              collapsed ? "items-center" : "items-start"
            }`}
          >
            {sidebarTabs.map((tab, idx) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(idx)}
                className={`
                  group flex items-center transition-all w-full rounded-lg cursor-pointer px-2 py-2
                  ${
                    activeTab === idx && activeTab !== "profile"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-500 hover:bg-gray-100"
                  }
                  ${collapsed ? "justify-center w-9 h-9" : "w-full"}
                `}
                title={collapsed ? tab.name : undefined}
              >
                <span className={`${collapsed ? "" : "mr-3"}`}>{tab.icon}</span>
                {!collapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {tab.name}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        {/* Profile Tab & Logout at the bottom */}
        <div
          className={`flex flex-col ${
            collapsed ? "items-center" : "items-start"
          } gap-2 w-full mb-1 px-2`}
        >
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex cursor-pointer items-center rounded-lg transition-all
              ${
                activeTab === "profile"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-600"
              }
              ${collapsed ? "w-9 h-9 justify-center" : "w-full px-2 py-2"}`}
            title="Profile"
          >
            {profileTab.icon}
            {!collapsed && (
              <span className="ml-2 text-sm font-medium">
                {profileTab.name}
              </span>
            )}
          </button>
          <button
            className={`flex cursor-pointer items-center rounded-lg bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500 transition-all ${
              collapsed ? "w-9 h-9 justify-center" : "w-full px-2 py-2"
            }`}
            title="Logout"
          >
            <LogOut size={20} />
            {!collapsed && (
              <span className="ml-2 text-sm font-medium">Logout</span>
            )}
          </button>
        </div>
      </aside>
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
