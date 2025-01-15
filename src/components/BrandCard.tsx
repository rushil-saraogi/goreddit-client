import Link from 'next/link'
import Image from 'next/image'
import Brand from "@/types/Brand";
import { brandMetaData, brandTags } from "@/util/brand";
import Tag from "./Tag";
import Tooltip from "./Tooltip";

export default ({ Name, PriceRangeLower, PriceRangeUpper, ID }: Brand) => {
  const getPriceTagColor = (priceRangeLower: number, PriceRangeUpper: number) => {
    const average = (priceRangeLower + PriceRangeUpper) / 2;
    
    if (average < 1000) {
      return "bg-emerald-700";
    } else if (average < 2500) {
      return "bg-yellow-700";
    } else if (average < 5000) {
      return "bg-orange-700";
    } else if (average < 10000) {
      return "bg-red-600";
    } else {
      return "bg-red-700";
    }
  }

  const brandTagIcons = {
    [brandTags.editor]: 'star',
    [brandTags.microbrand]: 'storefront',
  }

  const brandTagColors = {
    [brandTags.editor]: 'bg-rose-500',
    [brandTags.microbrand]: 'bg-blue-500',
  }
  return (
    <Link
      href={`/brands/${ID}`}
      className="min-h-44 flex shadow-sm bg-white hover:bg-gray-100 transition items-center justify-center after:content rounded-lg relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight max-h-52">
      <Image
        src={`/logos/${Name}.png`}
        alt={Name}
        width={120}
        height={240}
        className="max-h-20 max-w-44 transform brightness-90 transition will-change-auto"
      />

      <Tag classes={`absolute top-2 left-2 bg-opacity-100 ${getPriceTagColor(PriceRangeLower, PriceRangeUpper)}`}>
        ${PriceRangeLower} - ${PriceRangeUpper}
      </Tag>

      { brandMetaData[Name]?.tags && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {brandMetaData[Name].tags.map((tag, i) => (
            <Tooltip key={i} text={tag} position="left">
              <div className={`h-6 w-6 flex items-center justify-center rounded-full ${brandTagColors[tag]}`}>
                <span className="material-symbols-outlined text-white text-sm">{brandTagIcons[tag]}</span>
              </div>
            </Tooltip>
          ))}
          
        </div>
      )}
    </Link>
  );
};
