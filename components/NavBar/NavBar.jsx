
import { getTranslator } from '../helpers'
import { Link } from '@/navigation'
import { menus } from '@/data'
import LangSelector from './LangSelector'
import MenuMobile from './MenuMobile'



async function NavBar(props) {
    const { t, locale } = await getTranslator('Navigation')

    const MenuLinks = menus.map((menu) => {

        return <Link className="ml-6" href={menu.url} key={menu.url} locale={locale} > {t(menu.text)} </Link>
    })
    return (

        <nav
            className="flex absolute w-full px-3 py-5 h-10 z-30 top-0 left-0 text-white justify-between "
        >
            <Link className="flex items-center gap-2 p-2" href='/'>
                logo aqui
            </Link>
            <div className="hidden lg:flex items-center gap-2 p-2">
                {MenuLinks}

                <LangSelector selected={locale} />
            </div>
            <MenuMobile />


        </nav>


    )
}

export default NavBar
