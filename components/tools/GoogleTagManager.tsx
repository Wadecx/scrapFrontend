"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

interface GoogleTagManagerProps {
  gtmId: string;
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({
  gtmId,
}) => {
  useEffect(() => {
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, [gtmId]);

  return null;
};
