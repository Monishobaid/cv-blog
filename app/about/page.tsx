"use client";

import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { HeroSection } from "@/components/about/HeroSection";
import { ProfileSection } from "@/components/about/ProfileSection";
import { SuccessStories } from "@/components/about/SuccessStories";
import { SkillsSection } from "@/components/about/SkillsSection";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { CaseStudies } from "@/components/about/CaseStudies";

export default function AboutPage() {
  // Refs for each section
  const heroRef = useRef(null);
  const avatarRef = useRef(null);3
  const bioRef = useRef(null);
  const successStoriesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const caseStudiesRef = useRef(null);

  // Animation controls
  const heroControls = useAnimation();
  const avatarControls = useAnimation();
  const bioControls = useAnimation();
  const successStoriesControls = useAnimation();
  const skillsControls = useAnimation();
  const experienceControls = useAnimation();
  const caseStudiesControls = useAnimation();

  useEffect(() => {
    const sections = [
      { ref: heroRef, controls: heroControls, delay: 0 },
      { ref: avatarRef, controls: avatarControls, delay: 0.2 },
      { ref: bioRef, controls: bioControls, delay: 0.4 },
      { ref: successStoriesRef, controls: successStoriesControls, delay: 0.6 },
      { ref: skillsRef, controls: skillsControls, delay: 0.8 },
      { ref: experienceRef, controls: experienceControls, delay: 1 },
      { ref: caseStudiesRef, controls: caseStudiesControls, delay: 1.2 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = sections.find(
            (section) => section.ref.current === entry.target
          );
          if (section && entry.isIntersecting) {
            section.controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: section.delay },
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [
    heroControls,
    avatarControls,
    bioControls,
    successStoriesControls,
    skillsControls,
    experienceControls,
    caseStudiesControls,
  ]);

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <HeroSection controls={heroControls} heroRef={heroRef} />
      <ProfileSection
        avatarControls={avatarControls}
        bioControls={bioControls}
        avatarRef={avatarRef}
        bioRef={bioRef}
      />
      <SuccessStories
        controls={successStoriesControls}
        successStoriesRef={successStoriesRef}
      />
      <SkillsSection controls={skillsControls} skillsRef={skillsRef} />
      <ExperienceTimeline
        controls={experienceControls}
        experienceRef={experienceRef}
      />
      <CaseStudies
        controls={caseStudiesControls}
        caseStudiesRef={caseStudiesRef}
      />
    </div>
  );
}
