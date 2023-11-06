import { GlobeAltIcon } from '@heroicons/react/24/outline';
 
export default function AcmeLogo() {
  return (
    <div
      className="mb-8 text-xl md:text-2xl"
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
