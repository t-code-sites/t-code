import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

type ProjectImageCarouselProps = {
    images: string[];
    projectName: string;
};

function ProjectImageCarousel({ images, projectName }: ProjectImageCarouselProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const mainApiRef = useRef<CarouselApi | undefined>();
    const lightboxApiRef = useRef<CarouselApi | undefined>();
    const needsLightboxSyncRef = useRef(false);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const closeLightbox = useCallback(() => {
        const lb = lightboxApiRef.current;
        const main = mainApiRef.current;
        if (lb && main) {
            main.scrollTo(lb.selectedScrollSnap());
        }
        setLightboxOpen(false);
    }, []);

    const openLightbox = useCallback(() => {
        needsLightboxSyncRef.current = true;
        setLightboxOpen(true);
    }, []);

    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [lightboxOpen]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxOpen, closeLightbox]);

    useEffect(() => {
        if (lightboxOpen) {
            queueMicrotask(() => closeButtonRef.current?.focus());
        }
    }, [lightboxOpen]);

    const onLightboxApi = useCallback((api: CarouselApi | undefined) => {
        lightboxApiRef.current = api;
        if (api && needsLightboxSyncRef.current && mainApiRef.current) {
            api.scrollTo(mainApiRef.current.selectedScrollSnap());
            needsLightboxSyncRef.current = false;
        }
    }, []);

    if (images.length === 0) {
        return (
            <div
                className="flex min-h-[min(55vh,440px)] w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-6 text-center"
                aria-hidden
            >
                <div className="aspect-video w-full max-w-xl rounded-md border border-dashed border-white/15 bg-white/[0.03]" />
            </div>
        );
    }

    const carouselOpts = {
        align: 'start' as const,
        loop: false,
    };

    const lightbox = lightboxOpen
        ? createPortal(
              <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-6"
                  onClick={closeLightbox}
                  role="presentation"
              >
                  <div
                      className="flex h-full max-h-[100dvh] w-full max-w-[100vw] flex-col items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                      role="dialog"
                      aria-modal="true"
                      aria-label={`Imagens ampliadas, ${projectName}`}
                  >
                      <button
                          ref={closeButtonRef}
                          type="button"
                          onClick={closeLightbox}
                          className="absolute right-2 top-2 z-[110] rounded-full bg-white/10 p-3 text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:top-4"
                          aria-label="Fechar visualização"
                      >
                          <X className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                      </button>

                      <Carousel
                          className="w-full max-w-[min(100vw-1rem,1400px)] px-10 sm:px-14"
                          opts={carouselOpts}
                          setApi={onLightboxApi}
                      >
                          <CarouselContent className="-ml-2 sm:-ml-4">
                              {images.map((src) => (
                                  <CarouselItem key={`lb-${src}`} className="basis-full pl-2 sm:pl-4">
                                      <figure className="flex min-h-[50dvh] items-center justify-center sm:min-h-[60dvh]">
                                          <img
                                              src={src}
                                              alt={`${projectName}, captura ampliada`}
                                              className="max-h-[85dvh] max-w-full object-contain"
                                          />
                                      </figure>
                                  </CarouselItem>
                              ))}
                          </CarouselContent>
                          {images.length > 1 && (
                              <>
                                  <CarouselPrevious
                                      variant="outline"
                                      className="left-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-white/40 bg-black/40 text-white shadow-lg hover:bg-black/60 hover:text-white disabled:opacity-30 sm:left-2 sm:h-11 sm:w-11"
                                  />
                                  <CarouselNext
                                      variant="outline"
                                      className="right-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-white/40 bg-black/40 text-white shadow-lg hover:bg-black/60 hover:text-white disabled:opacity-30 sm:right-2 sm:h-11 sm:w-11"
                                  />
                              </>
                          )}
                      </Carousel>

                      {images.length > 1 && (
                          <p className="mt-2 text-center text-xs text-white/60 sm:text-sm">
                            Use as setas ou deslize para navegar
                          </p>
                      )}
                  </div>
              </div>,
              document.body
          )
        : null;

    return (
        <>
            <div className="relative w-full min-w-0">
                <Carousel
                    className="w-full"
                    opts={carouselOpts}
                    setApi={(api) => {
                        mainApiRef.current = api;
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {images.map((src) => (
                            <CarouselItem key={src} className="basis-full pl-2 md:pl-4">
                                <button
                                    type="button"
                                    onClick={openLightbox}
                                    title="Clique para ampliar em tela cheia"
                                    className="w-full cursor-zoom-in rounded-lg border border-gray-200 bg-white text-left shadow-sm transition ring-offset-2 hover:ring-2 hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    aria-label={`Ampliar imagem em tela cheia, ${projectName}`}
                                >
                                    <figure className="overflow-hidden rounded-lg">
                                        <img
                                            src={src}
                                            alt={`${projectName}, captura`}
                                            className="max-h-[min(55vh,440px)] w-full object-contain object-top"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </figure>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {images.length > 1 && (
                        <>
                            <CarouselPrevious
                                variant="outline"
                                className="left-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 border-gray-300 bg-white/95 shadow-md hover:bg-white disabled:opacity-40"
                            />
                            <CarouselNext
                                variant="outline"
                                className="right-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 border-gray-300 bg-white/95 shadow-md hover:bg-white disabled:opacity-40"
                            />
                        </>
                    )}
                </Carousel>
            </div>
            {lightbox}
        </>
    );
}

export default ProjectImageCarousel;
