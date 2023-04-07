import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import LoginPage from './components/sign-in/Signin';
import RegistrationPage from './components/sign-up/Signup';
import AddExpense from './components/addExpense-Income/ExpenseIncome';

import ExpensesScreen from "./components/pages-Expenses/Expenses";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/expenses" element={<ExpensesScreen />} />
            <Route path="/expenseIncome" element={<AddExpense />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;