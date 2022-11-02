import FileDownloadIcon from '~/assets/documentDownloadIcon.svg';
import { ContentTransformer } from '@crystallize/reactjs-components/dist/content-transformer';
import { FileDownload } from '~/core/contracts/Files';

export const Files = ({ chunks }: { chunks: FileDownload[] }) => (
    <details className="border-t border-[#dfdfdf] hover:bg-[#fefefe] frntr-accordination min-h-fit" open>
        <div className="grid gap-5 grid-col-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 h-auto -mt-4 mb-10">
            {chunks.map((chunk: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="bg-[#efefef] p-6 min-h-[300px] flex h-full flex-col justify-between w-full rounded-md"
                    >
                        <div className="mt-2 gap-2 mb-4">
                            <img
                                className="w-[25px] h-[25px] mb-2"
                                src={`${FileDownloadIcon}`}
                                width="40"
                                height="40"
                                alt="User icon"
                            />
                            <p className="font-semibold text-md">{chunk?.title}</p>
                            <div className="text-sm text-elipsis">
                                <ContentTransformer json={chunk?.description} />
                            </div>
                        </div>

                        {chunk?.files.length > 0 && (
                            <div className="flex text-sm flex-col">
                                {chunk?.files.map((file: any) => (
                                    <a className="mt-1 underline truncate" href={file.url} key={file.url}>
                                        ➞ {file?.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    </details>
);
