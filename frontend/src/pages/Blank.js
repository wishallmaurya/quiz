import Skeleton from "../layouts/Skeleton";
import SearchBar from "../components/SearchBar";
import MultiSelect from "../components/MultiSelect";

export default function Blank(props) {
    return(
        <Skeleton>
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
                <SearchBar></SearchBar>
                <MultiSelect></MultiSelect>
            </div>
        </Skeleton>
    )
}