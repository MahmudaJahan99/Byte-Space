import { AtSign, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleMessageSent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    console.log("Submitted email:", email);
  };

  return (
    <div className="w-full bg-electric-blue">
      <title>ByteSpace | Contact Us</title>

      <main className="page-section flex flex-col items-center text-lightest-gray text-center xl:p-12 relative z-10 my-10">
        {/* Section header */}
        <header>
          <h1 id="contact-heading" className="text-5xl font-semibold mb-2">
            Get In Touch
          </h1>
          <p className="text-lg">
            Any questions or remarks? Just write us a message.
          </p>
        </header>

        <div className="mx-auto max-w-7xl grid items-stretch px-4 lg:px-8 pt-20 pb-10 md:grid-cols-2 gap-12 text-left">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl text-left ">Meet Us</h2>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span>
                  <Phone />
                </span>
                <span> +123 456 789 10</span>
              </li>
              <li className="flex gap-2">
                <span>
                  <AtSign />
                </span>
                <span> bytespace@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span>
                  <MapPin />
                </span>
                <span>
                  {" "}
                  123 Main Street,
                  <br className="md:hidden" />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <section
            aria-label="Send message form"
            className="flex items-center justify-center md:mx-auto md:w-full md:max-w-xl lg:max-w-none"
          >
            <form
              action=""
              onSubmit={handleMessageSent}
              className="flex flex-col w-full rounded-3xl bg-white p-6 sm:p-8 md:p-10 text-dark-gray text-left"
            >
              <div className="space-y-5">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-[1.2]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      required
                      className="h-11.5 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm transition-all focus:blue-focus"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-[1.2]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="h-11.5 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm transition-all focus:blue-focus"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-[1.2]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@gmail.com"
                      required
                      className="h-11.5 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none transition-all focus:blue-focus"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="phoneNo"
                      className="text-sm font-medium leading-[1.2]"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="+ 11 2233 4455"
                      className="h-11.5 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none transition-all focus:blue-focus"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-[1.2]"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Share your thoughts with us..."
                    className="h-25 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none transition-all focus:blue-focus"
                  ></textarea>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
