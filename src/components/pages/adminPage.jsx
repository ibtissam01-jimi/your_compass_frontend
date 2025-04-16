import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../admin/menuAdmin";
import Dashboard from "../admin/Dashboard";
import SubmissionsTable from "../admin/Submissions";
import Services from "../admin/Services";
import AddService from "../admin/AddService";
import EvaluatorsTable from "../admin/users";
import AddEvaluator from "../admin/AddEvaluator";
import CategoriesPage from "../admin/categories";
import AddSubmission from "../admin/addSubmission";

function AdminPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const location = useLocation();

  // Mise à jour de la page active en fonction de l'URL
  useEffect(() => {
    if (location.pathname.startsWith("/admin/submissions")) {
      setActivePage("submission");
    } else if (location.pathname.startsWith("/admin/services")) {
      setActivePage("services");
    } else if (location.pathname.startsWith("/admin/evaluators")) {
      setActivePage("evaluators");
    } else if (location.pathname.startsWith("/admin/categories")) {
      setActivePage("categories");
    } else {
      setActivePage("dashboard");
    }
  }, [location.pathname]);

  const isAddSubmission = location.pathname === "/admin/submissions/ajouter";
  const isAddService = location.pathname === "/admin/services/ajouter"; // Condition pour l'ajout de service
  const isAddEvaluator = location.pathname === "/admin/evaluators/ajouter"; // Condition pour l'ajout d'évaluateur

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-64 mt-18 p-6 w-full bg-[#f4f1ec] min-h-screen">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "submission" && (
          <>
            {isAddSubmission ? <AddSubmission /> : <SubmissionsTable />}
          </>
        )}
        {activePage === "services" && (
          <>
            {isAddService ? <AddService /> : <Services />} {/* Affichage de la liste des services ou du formulaire d'ajout */}
          </>
        )}
        {activePage === "evaluators" && (
          <>
            {isAddEvaluator ? (
              <AddEvaluator setShowForm={setActivePage} />
            ) : (
              <EvaluatorsTable />
            )}
          </>
        )}
        {activePage === "categories" && <CategoriesPage />}
      </main>
    </div>
  );
}

export default AdminPage;
