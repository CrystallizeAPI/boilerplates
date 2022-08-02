import { useTranslation } from 'react-i18next';

const StockIndicators = ({ location }: { location: any }) => {
    const stock = location?.stock;
    let { t } = useTranslation('common');
    if (stock < 1) {
        return (
            <>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F42C04]" />
                    <p className="font-medium">{location.name}</p>
                </div>
                <p className="font-medium text-[#F42C04]">{t('stock.outOfStock')}</p>
            </>
        );
    }
    if (stock > 0 && stock < 21) {
        return (
            <>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFC60A]" />
                    <p className="font-medium">{location.name}</p>
                </div>
                <p className="font-medium text-[#E0AC00]">{t('stock.lowStock')}</p>
            </>
        );
    }
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green2" />
                <p className="font-regular">{location.name}</p>
            </div>
            <p className="font-medium text-green2">{t('stock.inStock')}</p>
        </>
    );
};

export const StockLocations = ({ locations }: { locations: any }) => {
    if (!locations) return null;
    return (
        <div>
            {locations?.map((location: any) => (
                <div key={location.identifier} className="flex py-2 items-center gap-2 justify-between">
                    <StockIndicators location={location} />
                </div>
            ))}
        </div>
    );
};
