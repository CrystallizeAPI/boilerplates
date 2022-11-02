import { ContentTransformer } from '@crystallize/reactjs-components/dist/content-transformer';
import { Paragraph } from '~/core/contracts/Paragraph';
import { ImageGallery } from '../image-gallery';

export const ParagraphCollection = ({ paragraphs }: { paragraphs: Paragraph[] }) => {
    return (
        <>
            {paragraphs?.map((paragraph: any, index: number) => (
                <div key={index}>
                    <div className="mt-10 md:mt-10 lg:mx-10 mb-20 pt-5 max-w-[800px] frntr-paragraph mx-2 w-auto">
                        <div className="my-10 mx-auto">
                            <h2 className="font-bold mt-10 text-3xl">{paragraph?.title}</h2>
                            <div className="frntr-content-transformer">
                                <ContentTransformer json={paragraph?.body} />
                            </div>
                        </div>
                    </div>
                    <ImageGallery images={paragraph?.images} />
                </div>
            ))}
        </>
    );
};
