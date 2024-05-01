import * as FlagIcons from './FlagIcons'
import LangWrapper from './LangWrapper'
import LangList from './LangList'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
async function LangSelector({ selected }) {
    const FlagIcon = FlagIcons[selected.toUpperCase()]
    const LanguageList = <LangList />
    return (

        <LangWrapper localeList={LanguageList}>

            <FlagIcon className="mr-1 h-4   " />  <ChevronDownIcon className="h-5 w-5 inline-block" />

        </LangWrapper>

    )
}

export default LangSelector
