import Image from "next/image";

interface PolaroidCardProps {
  src: string;
  alt: string;
  date: string;
  caption?: string;
  tape?: boolean;
  stickyNote?: string;
  stickyNotePosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function PolaroidCard({
  src,
  alt,
  date,
  caption,
  tape = true,
  stickyNote,
  stickyNotePosition = "bottom-right",
  className = "",
}: PolaroidCardProps) {
  // Sticky note placement styling
  const stickyPositions = {
    "top-left": "-top-6 -left-6 rotate-[-8deg]",
    "top-right": "-top-6 -right-6 rotate-[8deg]",
    "bottom-left": "-bottom-6 -left-6 rotate-[-10deg]",
    "bottom-right": "-bottom-6 -right-6 rotate-[10deg]",
  };

  return (
    <div className={`relative group p-4 pb-6 bg-[#EBE9E3] text-bg-base shadow-xl border border-white/20 max-w-[280px] w-full transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl flex-shrink-0 ${className}`}>
      {/* Tape Visual Effect */}
      {tape && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 polaroid-tape rotate-[-3deg] z-10 opacity-70" />
      )}

      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#1A1820] overflow-hidden border border-black/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 250px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Polaroid Caption Footer */}
      <div className="mt-4 flex flex-col items-center text-center">
        {caption && (
          <p className="font-serif text-xs font-bold uppercase tracking-wider text-bg-base/70">
            {caption}
          </p>
        )}
        <p className="font-handwriting text-2xl text-bg-base/90 font-bold mt-1.5 select-none leading-none">
          {date}
        </p>
      </div>

      {/* Overlapping Sticky Note */}
      {stickyNote && (
        <div 
          className={`absolute ${stickyPositions[stickyNotePosition]} z-20 bg-[#FAF1A2] text-[#121214] font-handwriting text-base p-3 shadow-md border-l border-yellow-200/50 w-28 leading-tight select-none rotate-[-4deg]`}
        >
          {/* Subtle tape effect on sticky note */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-white/30 rotate-[2deg] shadow-sm" />
          {stickyNote}
        </div>
      )}
    </div>
  );
}
