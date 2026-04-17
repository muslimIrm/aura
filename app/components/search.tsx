
import { ButtonDemo } from './button';
import { PlaceholdersAndVanishInputDemo } from './inputDemo'

const Search = async ({ path, searchParams }: { path: string, searchParams: Promise<{search?: string}> }) => {
    const {search} = await searchParams;

    return (
        <div className="w-full flex items-center justify-center">
            <PlaceholdersAndVanishInputDemo path={path}/>
            {
                search&& <ButtonDemo href={`/${path}`} content='X'/>
            }
        </div>
    )
}

export default Search;