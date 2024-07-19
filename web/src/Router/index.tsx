import { AuthLayout } from "@/view/layouts";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./authGuard";
import { Nav } from "./nav";
import { lazy, Suspense } from "react";
import { Spinner } from "@/components/Spinner";
import { Appointment } from "@/view/pages/Appointment";

const Login = lazy(() => import('@/view/pages/Login'))
const ForgetPassword = lazy(() => import('@/view/pages/ForgetPassword'))
const ResetPassword = lazy(() => import('@/view/pages/ResetPassword'))
const Dashboard = lazy(() => import('@/view/pages/Dashboard'))
const Psychologist = lazy(() => import('@/view/pages/Psychologist'))
const NotFound = lazy(() => import('@/view/pages/NotFound'))

export function Router() {
  return (
    <Suspense fallback={
      <Spinner />
    }>
    <HashRouter>
    <Routes>
      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path={Nav.login} element={<Login />} />
        <Route path={Nav.resetPassword} element={<ResetPassword />} />
        <Route path={Nav.forgetPassword} element={<ForgetPassword />} />
      </Route>

      <Route element={<AuthGuard isPrivate={true} />}>
        <Route element={<AuthLayout />}>
          <Route path={Nav.dashboard} element={<Dashboard />} />
          <Route path={Nav.pyschologist} element={<Psychologist />} />
          <Route path={Nav.appointment} element={<Appointment />} />
          <Route path={Nav.notFound} element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
    </HashRouter>
    </Suspense>
  )
}