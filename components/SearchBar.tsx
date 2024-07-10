"use client";
import SearchManufacturer from "./SeacrhManufacturer";
import React, { useState } from "react";
import Image from "next/image";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magniftying"
            width={40}
            height={40}
            className="object-contain" />
    </button>
)
const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchManufacturer === '' && searchModel === '') {
            return alert("Please select a manufacturer and model");
        }
        setModel(searchModel)
        setManufacturer(searchManufacturer);
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    alt="model"
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input type="text" name="model" value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar