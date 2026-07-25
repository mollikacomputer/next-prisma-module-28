import LoginForm from "../_components/LoginForm";

function LoginPage() {
  console.log("Backend api url :", process.env.BACKEND_API_URL);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadowlg">
            {/* form generic text */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Login Form</h2>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>
            {/* form action  */}
            <LoginForm/>
        </div>
      </div>
    </>
  )
}
export default LoginPage

