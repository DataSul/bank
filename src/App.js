

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/sign-in/Signin';
import RegistrationPage from './components/sign-up/Signup';
import AddExpense from './components/addExpense-Income/ExpenseIncome';

import ExpensesScreen from "./components/pages-Expenses/Expenses";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="ExpenseIncome" element={<AddExpense/>}/>
      <Route path="SignUp" element={<RegistrationPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="Expenses" element={<ExpensesScreen />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App;