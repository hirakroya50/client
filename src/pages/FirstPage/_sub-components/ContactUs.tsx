import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
        officiis!
      </p>
      <a
        href="mailto:example@example.com"
        className="p-3 border-[#f26627] border rounded-[50px]"
      >
        Support@help.goooo.in
      </a>
    </div>
  );
};

export default ContactUs;
