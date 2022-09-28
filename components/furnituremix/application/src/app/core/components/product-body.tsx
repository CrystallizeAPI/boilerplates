import { DimensionsTable } from './crystallize-components/dimensions-table';
import { ParagraphCollection } from './crystallize-components/paragraph-collection';
import { PropertiesTable } from './crystallize-components/properties-table';
import { Files } from '~/core/components/crystallize-components/files';
import { Paragraph } from '../contracts/Paragraph';

export const ProductBody: React.FC<{
    story?: Paragraph[];
    dimension?: any;
    propertiesTable?: any;
    downloads?: any;
}> = ({ story, dimension, propertiesTable, downloads }) => {
    return (
        <>
            {story && <ParagraphCollection paragraphs={story} />}
            <div className="mt-20">
                {propertiesTable &&
                    propertiesTable.map((table: any, index: number) => <PropertiesTable table={table} key={index} />)}
                {dimension.length > 0 && <DimensionsTable dimensions={dimension} />}
                {downloads.length > 0 && <Files chunks={downloads} />}
            </div>
        </>
    );
};
