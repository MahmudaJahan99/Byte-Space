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
              className="h-11.5 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm transition-all focus:blue-focus"
            />
          </div>
        ))}
        {children}
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col gap-5">
        <div className="w-full lg:w-fit lg:ml-auto">
          <Button
            buttonName={buttonName}
            type="submit"
            className="w-full lg:w-fit"
          />
        </div>

        {/* Social Login */}
        {showSocialLogin && (
          <>
            {/* Divider */}
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

            {/* Socials buttons */}
            <fieldset>
              <legend className="sr-only">Social login options</legend>
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="h-12 w-12 flex items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:light-focus"
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
                  className="h-12 w-12 flex items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:light-focus"
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
            className="text-electric-blue underline-offset-2 hover:underline focus:light-focus ml-1"
          >
            {footerLinkText}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
