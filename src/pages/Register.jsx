import "./loginStyle.css";
import RegisterLogo from "../component/register/RegisterLogo";
import RegisterForm from "../component/register/RegisterForm";

function Register() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen  ">
        <RegisterForm  className="col-span-2 md:col-span-1"  />

        <RegisterLogo className="hidden md:block" />
      </div>
    </div>
  );
}

export default Register;
