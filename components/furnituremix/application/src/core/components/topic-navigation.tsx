import { Link } from '@remix-run/react';
import { useAppContext } from '../app-context/provider';

export const TopicNavigation: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { path } = useAppContext();
    return (
        <>
            {navigation?.tree?.map((topic: any) => {
                const numberOfTopics = topic.children.length;
                const calculateColumns = numberOfTopics / 8;
                const numberOfCols = calculateColumns <= 1 ? 1 : Math.round(calculateColumns);
                return (
                    <span className="nav-anchor " key={topic.path}>
                        <span className="text-lg lg:text-[16px] block hover:underline">{topic.name}</span>
                        <span className="hidden lg:flex text-[11px] caret">▼</span>
                        <ul className="nav-dropdown" style={{ gridTemplateColumns: `repeat(${numberOfCols}, 1fr)` }}>
                            {topic.children?.map((child: any) => (
                                <Link to={path(child.path)} key={child.path}>
                                    <li className="hover:bg-grey text h-full text-sm w-full">{child.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </span>
                );
            })}
        </>
    );
};
