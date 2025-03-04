import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
         
const SearchSection = () => {
  const [search,setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search,500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`API çağrısı: ${debouncedSearchTerm}`);
      // API çağrısını burada yapabilirsiniz.
    }
  }, [debouncedSearchTerm]);
  
  return (
    <div className="container max-w-7xl mx-auto p-6 md:p-10 ">
      <div className="bg-black/5 rounded-full p-3 flex justify-between gap-2">
        <Search/>
        <input
          className="w-full px-2 outline-0"
          value={search}
          onChange={(v) => (setSearch(v.target.value))}
          type="text"
          placeholder="Etkinlik, sanatçı veya mekan arayın..."
        />
      </div>
    </div>
  );
};

export default SearchSection;
