"use client";

export default function AnnouncementBar() {
  const msg =
    "🚀 Transforming Travel & Hospitality with Intelligent Digital Solutions  •  AI-Powered Booking Engines  •  Direct Booking Growth  •  OTA Dependency Reduction  •  Mobile-First Experiences  •  ";

  return (
    <div className="bg-accent overflow-hidden py-2">
      <div className="flex">
        <div className="ticker-track flex items-center text-white text-xs font-semibold tracking-wide whitespace-nowrap">
          <span>{msg.repeat(4)}</span>
        </div>
      </div>
    </div>
  );
}
