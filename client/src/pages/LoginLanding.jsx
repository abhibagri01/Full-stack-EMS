import LoginLeftSide from "../components/LoginLeftSide";
import { Link } from "react-router-dom";
import { ShieldIcon, UserIcon, ArrowRightIcon } from "lucide-react";

const LoginLanding = () => {

  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, payroll, and system configurations.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your profile, track attendance, request time off, and access payslips.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div
        className="w-full md:w-1/2 flex flex-col items-center
        justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto
        min-h-screen"
      >
        <div className="w-full max-w-md animate-fade-in relative z-10">

          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome Back
            </h2>

            <p className="text-slate-500">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Portals List */}
          <div className="space-y-4">
            {portalOptions.map((portal) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50"
                >
                  <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>

                      <div>
                        <h3
                          className="text-lg font-medium text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors"
                        >
                          {portal.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {portal.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon
                      className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-sm text-slate-500">
            © 2026 Employee Management System
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginLanding;