import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

interface AuthField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
}

interface AuthFormProps {
  title: string;
  subtitle: string;
  fields: AuthField[];
  buttonName: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
  showSocialLogin?: boolean;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

const AuthForm = ({
  title,
  subtitle,
  fields,
  buttonName,
  footerText,
  footerLinkText,
  footerLinkTo,
  showSocialLogin = false,
  onSubmit,
  children,
}: AuthFormProps) => {
  const titleId = `${title.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
    <form
      action=""
      onSubmit={onSubmit}
      aria-labelledby={titleId}
      className="flex flex-col w-full rounded-3xl bg-white p-6 sm:p-8 md:p-10"
    >
      {/* Form header */}
      <div className="mb-4">
        <h2
          id={titleId}
          className="text-electric-blue text-lg font-normal mb-0"
        >
          {title}
        </h2>
        <h3>{subtitle}</h3>
      </div>

      {/* Form fields */}
      <div className="space-y-5">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-0.5">
            <label
              htmlFor={field.id}
              className="text-sm font-medium leading-[1.2]"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required ?? true}
              className="h-13 w-full rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-900 outline-none transition focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
            />
          </div>
        ))}
        {children}
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col gap-5">
        <div className="w-full lg:ml-auto lg:w-fit">
          <Button
            buttonName={buttonName}
            type="submit"
            className="w-full lg:w-fit"
          />
        </div>

        {/* Social Login */}
        {showSocialLogin && (
          <>
            <div
              className="flex items-center gap-4"
              role="separator"
              aria-label="Or continue with"
            >
              <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
              <span className="text-sm text-gray-400" aria-hidden="true">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
            </div>

            <fieldset>
              <legend className="sr-only">Social login options</legend>
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-electric-blue/20"
                >
                  <img
                    src="/facebook-icon.png"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-electric-blue/20"
                >
                  <img
                    src="/google-icon.png"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </fieldset>
          </>
        )}

        {/* Footer */}
        <p className="text-center">
          {footerText}
          <Link
            to={footerLinkTo}
            className="text-electric-blue underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:ring-offset-2"
          >
            {footerLinkText}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
