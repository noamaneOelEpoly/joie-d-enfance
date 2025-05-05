import React from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import DonationForm from "./DonationForm";
import Navbar from "./Navbar";
import { ContentSectionProps } from "@/components/ContentSection";
const HomePage = () => {
  const [isDonationFormOpen, setIsDonationFormOpen] = React.useState(false);

  const handleOpenDonationForm = () => {
    setIsDonationFormOpen(true);
  };

  const handleCloseDonationForm = () => {
    setIsDonationFormOpen(false);
  };

  const sectionsData: ContentSectionProps[] = [
    {
      id: "about",
      title: "About Us",
      description:
        "Joie d'Enfance is dedicated to providing love, care, and support to orphaned children across the region. Our mission is to create a nurturing environment where every child can thrive, learn, and experience the joy of childhood despite challenging circumstances.",
      imageUrl:
        "https://i.ibb.co/q3BYLFn7/pexels-humeyra-ozessiz-1637518823-31942014.jpg",
      content: <p>Learn more about our story and our vision for the future.</p>,
    },
    {
      id: "impact",
      title: "Our Impact",
      description:
        "Since our founding, we have supported over 500 children with shelter, education, healthcare, and emotional support. Our programs focus on holistic development, ensuring that each child receives the tools they need to build a bright future.",
      imageUrl:
        "https://i.ibb.co/wNKc0GMS/pexels-mehmet-fatih-bayram-669210622-31936783.jpg",
      content: <p>Discover the positive change we’ve created together.</p>,
    },
    {
      id: "support",
      title: "Support Us",
      description:
        "Your contribution makes a significant difference in the lives of our children. Whether through financial donations, volunteering your time, or providing essential supplies, your support helps us continue our mission of bringing joy to every child in our care.",
      imageUrl:
        "https://i.ibb.co/bjjMq55R/pexels-karol-hiils-896421875-31914154.jpg",
      content: <p>Find out how you can help and make an impact today.</p>,
      ctaText: "Donate Now",
      ctaAction: () => alert("Thank you for your support!"),
    },
    {
      id: "contact",
      title: "Contact",
      description:
        "We would love to hear from you! Reach out to learn more about our organization, how you can get involved, or to schedule a visit to our facilities. Email: noamane.ouldelabbar@e-polytechnique.ma | Phone: +212700902021 | Address: Bab Al Madina, Qr Tilila, B.P. 8143, Agadir",
      imageUrl: "https://i.ibb.co/Q3ts9dBT/pexels-pixabay-220455.jpg",
      content: (
        <div>
          <p>Email: noamane.ouldelabbar@e-polytechnique.ma</p>
          <p>Phone: +212700902021</p>
          <p>Address: Bab Al Madina, Qr Tilila, B.P. 8143, Agadir</p>
        </div>
      ),
      ctaText: "Get in Touch",
      ctaAction: () => alert("Contact form coming soon!"),
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection onDonateClick={handleOpenDonationForm} />

      <div className="container mx-auto px-4 py-16">
        {/* Map through your sectionsData array */}
        {sectionsData.map((d) => (
          <ContentSection
            key={d.id}
            id={d.id}
            title={d.title}
            description={d.description}
            imageUrl={d.imageUrl}
            content={d.content}
            ctaText={d.ctaText}
            ctaAction={d.ctaAction}
          />
        ))}
      </div>

      {/* Donation Form Dialog */}
      <Dialog open={isDonationFormOpen} onOpenChange={setIsDonationFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DonationForm onClose={handleCloseDonationForm} />
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Joie d'Enfance</p>
          <p className="mb-4">Bringing joy to children's lives</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Instagram
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            © {new Date().getFullYear()} Joie d'Enfance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
