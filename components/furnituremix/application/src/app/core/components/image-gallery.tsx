import { Image } from '@crystallize/reactjs-components/dist/image';

export const ImageGallery = ({ images }: { images: any }) => {
    const galleryHasOddNubmer = images?.length % 2 || null;

    return (
        <div className="frntr-img-gallery ">
            {images?.map((img: any, i: any) => {
                const isPortraitImg = img.variants[0].height > img.variants[0].width;
                return (
                    <div key={i} className={`${isPortraitImg ? 'portrait' : 'landscape'} frntr-img`}>
                        <Image
                            {...img}
                            sizes={`${i < 1 || (i === images?.length && !galleryHasOddNubmer) ? '50vw' : '33vw'}`}
                            loading="lazy"
                        />
                    </div>
                );
            })}
        </div>
    );
};
