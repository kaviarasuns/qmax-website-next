import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can Qmax meet my tight schedule?",
      answer: {
        text: "We will be able to reduce design cycle time by the below mentioned approaches:",
        list: [
          "Have more than one Engineer to work concurrently on a single design.",
          "Work on multiple shifts (24/7) to meet time lines.",
          "Deploy our Engineer Onsite to work along with your engineer.",
          "Make use of the time zone difference and work in additional shift.",
        ],
      },
    },
    {
      question: "How do you meet quality requirements?",
      answer: {
        list: [
          "We have a robust verification process to ensure quality at each stage of the design cycle.",
          "All our Engineers are qualified and conversant with DFx, safety standards.",
          "We constantly improve our process and train our engineers in the latest technologies to meet highly demanding client's requirements.",
          "Meeting the highest quality requirements is our key strength.",
        ],
      },
    },
    {
      question: "Does Qmax sign NDAs (Non-Disclosure Agreements)?",
      answer: {
        text: "Yes, we routinely sign NDAs to safeguard the customer's IP. All Qmax employees are bound by NDAs with Qmax.",
      },
    },
    {
      question: "Who owns the Intellectual Property?",
      answer: {
        text: "The IP always belongs to the customer. We transfer all engineering drawings to the customer at the various project stages and at the project completion.",
      },
    },
    {
      question:
        "Will Qmax be able to follow the client process and guidelines?",
      answer: {
        text: "Yes. By default, we will follow Industry standard practices. We can also follow the client process and guidelines.",
      },
    },
    {
      question: "How do I monitor the work progress?",
      answer: {
        text: "We share the files with the customer on a regular basis. We will also have scheduled calls and meetings to discuss work progress.",
      },
    },
    {
      question: "What is the communication model?",
      answer: {
        text: "File transfer – Secure Cloud Servers, Email.\nCommunication / Meetings – Skype, Conference Calls, Email.",
      },
    },
    {
      question: "What are all the different engagement models?",
      answer: {
        list: [
          "Time and materials mode: We charge for the actual numbers of hours spent on the Project",
          "Offshore Development Centre (ODC) Model: We will have dedicated resource for your projects and bill on monthly basis.",
          "Onsite deployment: We will have our Engineers working at your site and you will be billed for the number of hours worked.",
          "Fixed Bid Model: When we have detailed design inputs, we calculate the efforts and give a fixed quote.",
        ],
      },
    },
    {
      question: "Why should we outsource at all?",
      answer: {
        text: "Organizations of every shape and size are pursuing outsourcing strategies today. Most are looking for ways to increase their business performance, profitability and competitiveness.",
        list: [
          "Enhance capabilities in key competitive areas",
          "Partner with experts to increase innovation",
          "Increase the ability to focus on core competencies",
          "Move from fixed costs to variable costs",
          "Reduce costs",
          "Speed time to market",
          "Improve business performance",
        ],
      },
    },
    {
      question:
        "Is it possible to have Qmax staff on our site for a limited period of time?",
      answer: {
        text: "Yes, this is often done when a project requires very close interaction with the Engineers.",
      },
    },
    {
      question:
        "What are all common deliverables the PCB design release package contains?",
      answer: {
        text: "The final release package contains the database file, Gerber for all electrical and non-electrical layers, Fabrication and Assembly Drawings, Fabrication, Assembly and Test files, Checklist Etc.",
      },
    },
    {
      question:
        "What are manufacturability checks you do before releasing the Gerbers?",
      answer: {
        text: "We do one level of CAM check usingcutting edge CAM tools. The typical checks we do are IPC Netlist verification, acid traps, slivers, Solder mask checks etc.",
      },
    },
    {
      question: "Can we do only PCB library services?",
      answer: {
        text: "Yes, we can work on library service too.",
      },
    },
    {
      question: "Will the library components be made to my specific standards?",
      answer: {
        text: "By default, we will follow IPC standards for footprint, and IEEE standards for symbols. We can also follow client specific standards.",
      },
    },
    {
      question:
        "Is there some kind of verification procedure in place to ensure accuracy?",
      answer: {
        text: "Yes, once one librarian creates the component footprint, another librarian will verify it. Our robust verification process ensures ZERO DEFECTS.",
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-brand-red hover:text-brand-red/90 transition-colors">
              Frequently Asked
            </span>
            <span className="text-black"> Questions</span>
          </h1>
        </div>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-brand-red hover:text-brand-red/90 transition-colors mb-4">
                {faq.question}
              </h3>
              <div className="text-gray-600">
                {faq.answer.text && <p className="mb-4">{faq.answer.text}</p>}
                {faq.answer.list && (
                  <ul className="list-disc pl-5 space-y-2">
                    {faq.answer.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
