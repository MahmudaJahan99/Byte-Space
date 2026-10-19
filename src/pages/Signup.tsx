import AuthForm from "../components/AuthForm/AuthForm";
import AuthDecoration from "../components/AuthForm/AuthDecoration";
import AuthPageNav from "../components/AuthForm/AuthPageNav";

const Signup = () => {
  return (
    <div className="min-h-screen w-full bg-electric-blue">
      <title>ByteSpace | Signup</title>

      {/* Top Nav */}
      <AuthPageNav />

      <main className="mx-auto grid min-h-screen max-w-7xl items-stretch px-4 pt-20 pb-10 lg:grid-cols-2 lg:gap-12 lg:px-8 overflow-hidden">
        {/* Promotional content */}
        <AuthDecoration
          title="Sign up and come in"
          subtitle="The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost."
        />

        {/* Form */}
        <section
          aria-label="Create account form"
          className="flex items-center justify-center md:mx-auto md:w-full md:max-w-xl lg:max-w-none"
        >
          <AuthForm
            title="Create an Account"
            subtitle="Welcome to ByteSpace"
            buttonName="Continue"
            footerText="Already have an account?"
            footerLinkText="Login"
            footerLinkTo="/login"
            fields={[
              {
                id: "full-name",
                name: "full-name",
                label: "Full Name",
                type: "text",
                placeholder: "Jane Doe",
                autoComplete: "name",
              },
              {
                id: "email",
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "jane@example.com",
                autoComplete: "email",
              },
              {
                id: "password",
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "********",
                autoComplete: "new-password",
              },
              {
                id: "confirm-password",
                name: "confirm-password",
                label: "Confirm Password",
                type: "password",
                placeholder: "********",
                autoComplete: "new-password",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default Signup;
