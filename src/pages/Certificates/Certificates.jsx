import React from "react";
import "./Certificates.css";

const certifications = [
  {
    name: "C++ Programming Professional Certificate by OpenEDG C++ Institute",
    image: "/c++_certificate.png",
    issuingOrganization: "C++ Institute",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/2a607fed7defc88c02d86b911ca135198ad1c5f6f50b78ac6cb47dacc843f49b",
    skills: ["C++", "Data Structures", "Programming"],
  },
  {
    name: "JavaScript Foundations Professional Certificate by Mozilla",
    image: "/javascript.png",
    issuingOrganization: "Mozilla",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/43c7b2551a3774e3ade6661ff9ad55da115ef0f203159f9cb45d527adbaed68f",
    skills: ["Javascript", "Web Development"],
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    image: "/career-essentials-in-generative-ai.jpg",
    issuingOrganization: "Microsoft",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/cd38c2cc806a3db6e76dd0a9e5396bf54d8a5f36142a64d4f4ddae65c8f87029",
    skills: ["Artificial Intelligence (AI)", "Computer Ethics", "Generative AI"],
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    image: "/github.png",
    issuingOrganization: "Github",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/3fa071f42fe632240eedb045b25ffc6876da9ec311ba0e195c521726799cd7ff",
    skills: ["Github"],
  },
  {
    name: "React: Design Patterns",
    image: "/react-design-patterns.png",
    issuingOrganization: "Linkedin",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/5e8721e7a18a3005975615f54f8486921bf55d0b39624ada5aba9eb13f9fe656",
    skills: ["React.js", "Software Design Patterns"],
  },
  {
    name: "Angular Essential Training",
    image: "/angular.png",
    issuingOrganization: "Linkedin",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/e1d7a1db91e5cace8204f3e32d4d4a0d8eeb5c3c3c9ad335005141f5337ba54b",
    skills: ["Angular"],
  },
  {
    name: "Prepare for the Azure Fundamentals (AZ-900) Certification by Microsoft Press",
    image: "/azure.png",
    issuingOrganization: "Linkedin",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/9a96656bee730387992c0c93e6654d1129bb23dbd4e65b6f00eeab6b0037898d",
    skills: ["Cloud Administration","Microsoft Azure"],
  },
  {
    name: "Designing RESTful APIs",
    image: "/restful-apis.png",
    issuingOrganization: "Linkedin",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/68b46e59a549856fa5041ce6dca2b6f04a359426b899bb3ce69c7bd7d076e5f3",
    skills: ["Rest APIs"],
  },
  {
    name: "Career Essentials in Software Development by Microsoft and LinkedIn",
    image: "/software-development.png",
    issuingOrganization: "Microsoft",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/e4344bcca44d131b38c3f078f10c64788e64debe5bd831ca7ce4a6eb2cac0a55",
    skills: ["Programming", "Software Development"],
  },
  {
    name: "Building Modern UIs with React Router v6",
    image: "/modern-ui-react.png",
    issuingOrganization: "Linkedin",
    issuedDate: "Nov 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/c13741da1239f06bc694cd2ba5c697e14ff293d8cdee2494ec7afd488d454622",
    skills: ["React.js, User Interface Design"],
  },
];

const Certificates = () => {
  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              alt={cert.name}
              className="cert-image"
            />
            <div className="cert-details">
              <h2 className="cert-name">{cert.name}</h2>
              <p className="cert-org">
                <strong>Issuing Organization:</strong> {cert.issuingOrganization}
              </p>
              <p className="cert-date">
                <strong>Issued Date:</strong> {cert.issuedDate}
              </p>
              <p className="cert-url">
                <strong>Show Credential:</strong>{" "}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </p>
              <p className="cert-skills">
                <strong>Skills Learned:</strong> {cert.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
