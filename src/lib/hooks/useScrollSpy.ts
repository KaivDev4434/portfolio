"use client"

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking active section during scrolling
 * @param sectionIds Array of section IDs to track
 * @param offset Offset from the top to consider a section active
 * @returns The ID of the currently active section
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Function to check which section is currently in view
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;

      // Find the current section
      const current = sectionIds
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, position: -Infinity };
          
          // Get the position of the element relative to the viewport
          const rect = element.getBoundingClientRect();
          return {
            id,
            position: rect.top + scrollY - offset
          };
        })
        .filter(section => section.position <= scrollY)
        .sort((a, b) => b.position - a.position);

      // Update the state with the ID of the current section
      const currentSection = current[0]?.id || null;
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    // Call handler initially to set active section on page load
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeSection, offset]);

  return activeSection;
} 