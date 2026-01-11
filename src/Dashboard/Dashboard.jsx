import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const go = (page) => {
    closeMenu();
    navigate("/" + page);
  };

  const logout = () => {
    closeMenu();
    alert("Logging out...");
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="bg-[#4a90b4] h-14 flex items-center justify-between px-4 text-white fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={openMenu} className="text-2xl">☰</button>
          <h1 className="text-lg font-semibold">Welcome!</h1>
        </div>
        <span className="text-xl">🔔</span>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 backdrop-blur-md bg-white/30 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-sky-400 text-white p-4">
          <div className="flex justify-between items-start">
            <h2 className="font-semibold uppercase text-sm">
              Welcome Jajal kavya balvantbhai!
              <br />(2024–2025)
            </h2>
            <button onClick={closeMenu} className="text-xl">✕</button>
          </div>
        </div>

        <ul className="p-4 space-y-3 text-gray-800">
          <li onClick={() => go("student")} className="menu-item">🎓 Student Information</li>
          <li onClick={() => go("timetable")} className="menu-item">⏰ Time Table</li>
          <li onClick={() => go("attendance")} className="menu-item">🧍 Attendance</li>
          <li onClick={() => go("assignment")} className="menu-item">📄 Assignment</li>
          <li onClick={() => go("repository")} className="menu-item">📚 Digital Repository</li>
          <li onClick={() => go("meet")} className="menu-item">🎥 QualCampus Meet</li>
          <li onClick={() => go("classroom")} className="menu-item">🏫 Online Class Room</li>
          <li onClick={() => go("quiz")} className="menu-item">📝 Quiz</li>
          <li onClick={() => go("notices")} className="menu-item">🔔 Notices</li>
          <li onClick={() => go("opac")} className="menu-item">📖 OPAC</li>
          <li onClick={() => go("committee")} className="menu-item">👥 Committee Management</li>
          <li onClick={() => go("fees")} className="menu-item">₹ Fees</li>
          <li onClick={() => go("feedback")} className="menu-item">👍 Student Feedback</li>
          <li onClick={() => go("about")} className="menu-item">ℹ️ About</li>
          <li onClick={logout} className="menu-item text-red-600">⏻ Logout</li>
        </ul>
      </aside>

      {/* MAIN CONTENT – SAME POSITION, RESPONSIVE */}
      <main className="pt-24 px-4 flex justify-center">
  <div className="max-w-5xl flex flex-col items-center text-center">
    <img
      src="https://img.sanishtech.com/u/c26776d57eff7b5e75c6ac0374802122.png"
      alt="JG University Logo"
      className="w-56 sm:w-64 md:w-80 h-auto "
    />

    <h1 className="mt-3 uppercase text-lg sm:text-xl font-semibold text-gray-800">
      JG University
    </h1>
  </div>
</main>


      {/* Styles */}
      <style>{`
        .menu-item {
          cursor: pointer;
          padding: 10px;
          border-radius: 6px;
        }
        .menu-item:hover {
          background-color: #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
