import Button from "../ui/Button";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-electric-blue text-gray-white text-center relative flex flex-col items-center justify-center overflow-hidden px-4">
      <title>Page Not Found</title>

      <div className="relative">
        <h1 className="bg-linear-to-b from-electric-lime to-white/10 bg-clip-text text-transparent text-9xl md:text-[300px] font-bold leading-none">
          404
        </h1>

        {/* Position this wherever you want on the 404 */}
        <h2 className="absolute inset-x-0 top-2/3 -translate-y-2/3 text-white text-xl md:text-4xl font-semibold">
          The page you are looking for doesn't exist
        </h2>
      </div>

      <Button
        buttonName="Go back"
        className="mt-10 text-dark-gray"
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default ErrorPage;
