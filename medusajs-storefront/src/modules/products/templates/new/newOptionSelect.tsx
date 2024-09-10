import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
    option: ProductOption
    current: string
    updateOption: (option: Record<string, string>) => void
    title: string
}

const NewOptionSelect: React.FC<OptionSelectProps> = ({
    option,
    current,
    updateOption,
    title,
}) => {
    const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

    return (
        <div className="flex flex-col gap-y-4">
            <label htmlFor={option.id} className="text-title w-full font-semibold">Select {title}:</label>
            <select
                id={option.id}
                value={current}
                onChange={(e) => updateOption({ [option.id]: e.target.value })}
                className="px-4 py-3 border bg-white text-button capitalize focus:outline-none focus:ring-2 focus:ring-black"
            >
                <option value="">Choose {title}</option>
                {filteredOptions.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default NewOptionSelect
