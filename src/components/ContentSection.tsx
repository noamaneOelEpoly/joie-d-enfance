import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ContentSectionProps {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  imageUrl?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

const ContentSection = ({
  id = "section",
  title = "Section Title",
  description = "This is a description of the section content.",
  content = <p>Section content goes here.</p>,
  imageUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  ctaText,
  ctaAction = () => console.log("CTA clicked"),
}: ContentSectionProps) => {
  return (
    <section id={id} className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {id === "about" || id === "impact" ? (
            <>
              <div className="order-2 md:order-1">
                <Card>
                  <CardContent className="pt-6">
                    {content}
                    {ctaText && (
                      <Button onClick={ctaAction} className="mt-6">
                        {ctaText}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
              <div>
                <Card>
                  <CardContent className="pt-6">
                    {content}
                    {ctaText && (
                      <Button onClick={ctaAction} className="mt-6">
                        {ctaText}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
