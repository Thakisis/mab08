import './menuMobile.css'
import { Link } from '@/navigation'
import MenuMobileClient from './MenuMobileClient'
import { menus } from '@/data'
import { getTranslator } from '@/components/helpers'

import LangList from '../LangSelector/LangList'


async function MenuMobile(props) {
    const { t, locale } = await getTranslator('Navigation')
    const Languages = <LangList />
    const MenuLinks = menus.map((menu) =>
    (

        <Link className="flex relative flex-col" href={menu.url} key={menu.url} locale={locale} >
            <span className={` font-bold text-4xl pointer-events-none`}>{t(menu.text)} </span>
            <span className="pl-5  text-slate-500 pointer-events-none">{t(`${menu.text}Quote`)}</span>
        </Link>
    )
    )
    return (
        <div className="lg:hidden items-center gap-2">
            <MenuMobileClient className="relative navbar-burger flex items-center text-white pr-3 z-50">

                <div className='py-3 flex flex-col inset-0 z-30  w-full items-center '>
                    <div className='flex w-full  justify-between pt-10 px-20'>
                        <LangList></LangList>
                    </div>
                    <div className=' py-5 flex flex-col  flex-1 justify-around '>
                        {MenuLinks}

                    </div>

                </div>
            </MenuMobileClient>

        </div>
    )
}

export default MenuMobile
