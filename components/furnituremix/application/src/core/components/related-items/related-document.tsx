import Link from '~/infrastructure/bridge/Link';
import { Image } from '@crystallize/reactjs-components/dist/image';
import { useAppContext } from '~/core/app-context/provider';

export const RelatedDocument = ({ document }: { document: any }) => {
    const { path } = useAppContext();
    let title = document.components.find((component: any) => component.name === 'Title')?.content?.text;
    let media = document.components.find((component: any) => component.name === 'Media')?.content?.selectedComponent
        ?.content;
    return (
        <div className="pb-5 img-cover-hover">
            <Link to={path(document.path)}>
                <div className="img-container img-cover rounded-md overflow-hidden">
                    <Image {...media?.images?.[0]} sizes="200px" loading="lazy" alt={title} />
                </div>
                <h4 className="font-semibold mt-5">{title}</h4>
            </Link>
        </div>
    );
};
