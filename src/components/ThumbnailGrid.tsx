import { useState } from "react";
import ThumbnailCard from "./ThumbnailCard";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ThumbnailGridProps {
    thumbnails: string[];
}

const INITIAL_COUNT = 8;

const ThumbnailGrid = ({ thumbnails }: ThumbnailGridProps) => {
    const [showAll, setShowAll] = useState(false);

    const visibleThumbnails = showAll ? thumbnails : thumbnails.slice(0, INITIAL_COUNT);
    const hasMore = thumbnails.length > INITIAL_COUNT;

    return (
        <div className="relative px-6 md:px-12 lg:px-24 pb-16 max-w-5xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {visibleThumbnails.map((driveId, index) => (
                    <ThumbnailCard
                        key={driveId}
                        driveId={driveId}
                        index={index}
                    />
                ))}
            </div>

            {/* Show More / Show Less Button */}
            {hasMore && (
                <div className="relative flex justify-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="glass-card-hover magnetic-hover group flex items-center gap-3 px-8 py-4 text-sm tracking-wider uppercase text-foreground/80 hover:text-foreground transition-all duration-300"
                    >
                        <span>{showAll ? 'Show Less' : 'Show More'}</span>
                        {showAll ? (
                            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        ) : (
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThumbnailGrid;
