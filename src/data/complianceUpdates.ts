// Newest first. To publish a future update, add an entry to the top of this
// list; `video` is optional. The header resource strip shows the first entry.
export const updates = [
  {
    id: "2026-fdcpa-compliance-update",
    title: "2026 FDCPA Compliance Update",
    summary: [
      "Five recent developments highlight important considerations in today’s FDCPA compliance environment, including Article III standing, communications with represented consumers, bankruptcy-related collection activity, the CFPB’s withdrawal of guidance documents, and the continuing requirements of Regulation F.",
      "The one-page update provides a concise summary of each development together with sources and primary-source corroboration.",
    ],
    pdf: {
      href: "/FDCPA-Compliance-Update-2026.pdf",
      label: "View the 2026 Compliance Update",
      ariaLabel:
        "View the 2026 FDCPA Compliance Update, one-page PDF (opens in a new tab)",
      note: "One-page PDF • Sources and primary-source corroboration included.",
    },
    video: {
      heading: "60-Second Compliance Overview",
      title: "60-Second FDCPA Compliance Update",
      // thumbnail-time picks the title card as Mux's poster frame.
      src: "https://player.mux.com/L9HSIOa4FTtkUXxvGIhSvWpLCor3o59zckWJ02Zf5WUg?metadata-video-title=Compliance+Update&video-title=Compliance+Update&accent-color=%23ffffff&primary-color=%23e69c24&thumbnail-time=3",
    },
  },
];

export const latestUpdate = updates[0];
