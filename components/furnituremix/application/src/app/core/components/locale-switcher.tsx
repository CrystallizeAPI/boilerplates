import { useTranslation } from 'react-i18next';

export const LocaleSwitcher = () => {
    let locales = [
        { code: 'en', name: 'EN' },
        { code: 'es', name: 'ES' },
        { code: 'no', name: 'NO' },
    ];
    const { i18n } = useTranslation();
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <select onChange={handleChange} className="w-[60px] px-2 border-2 hover:cursor-pointer">
            {locales.map((locale) => (
                <option value={locale.code} key={locale.code}>
                    {locale.name}
                </option>
            ))}
        </select>
    );
};
