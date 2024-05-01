import LangElement from './LangElement'
import { locales } from '@/navigation'
import { getTranslator } from '@/components/helpers'

async function LangList({ mobile }) {

    const { t, locale } = await getTranslator('Languajes')
    return locales.map((lng) => <LangElement key={lng} langName={t(lng)} locale={lng} selected={locale} />)
}

export default LangList
