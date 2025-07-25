import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import Image from 'next/image';

const logos = [
  { src: '/logos/thirdweb.svg', alt: 'Thirdweb - Plataforma de desenvolvimento blockchain destacou Gotas como solução inovadora' },
  { src: '/logos/exame-logo-1-1 1.avif', alt: 'Revista Exame destacou Gotas como startup revolucionária em recompensas digitais' },
  { src: '/logos/Group 1000006196.avif', alt: 'Parceiro estratégico na implementação de tokens de recompensa digital' },
  { src: '/logos/moonbeam-glmr-logo-full 1.avif', alt: 'Moonbeam - Rede blockchain que suporta os tokens de recompensa Gotas' },
  { src: '/logos/image 3.avif', alt: 'Mídia especializada em Web3 destacou a plataforma Gotas' },
  { src: '/logos/Polygon_Mono_Light 1.avif', alt: 'Polygon - Infraestrutura blockchain utilizada pelo ecossistema Gotas' },
  { src: '/logos/Logo 1.avif', alt: 'Parceiro tecnológico do ecossistema de recompensas digitais Gotas' },
  { src: '/logos/65b7b3726a362e8421036e36_Base_Wordmark_Blue 1.avif', alt: 'Base - Rede blockchain compatível com tokens de recompensa Gotas' },
  { src: '/logos/cnbc_logo-7RFd0M.png', alt: 'CNBC destacou Gotas como inovação em programas de fidelidade digital' },
];

export function ProgressiveBlurSlider() {
  return (
    <div className='relative h-[120px] w-full overflow-hidden'>
      <InfiniteSlider className='flex h-full w-full items-center'>
        {logos.map((logo, index) => (
          <div key={index} className='w-40 h-16 flex items-center justify-center px-3'>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className='max-w-full max-h-full object-contain filter brightness-0 invert'
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 left-0 h-full w-[80px] sm:w-[200px]'
        direction='left'
        blurIntensity={1}
      />
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 right-0 h-full w-[80px] sm:w-[200px]'
        direction='right'
        blurIntensity={1}
      />
    </div>
  );
}