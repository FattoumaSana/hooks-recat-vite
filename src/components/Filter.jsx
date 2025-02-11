import React from "react"; 
import { Input } from "@/components/ui/input"; 

const Filter = ({ setFilterTitle, setFilterRating }) => {
    return (
        <div className="flex gap-4 p-4">
            <Input
                placeholder="Rechercher par titre..."
                onChange={(e) => setFilterTitle(e.target.value)}
                className="w-1/2 p-2 border rounded"
            />
            <Input
                type="number"
                placeholder="Note minimale..."
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-1/4 p-2 border rounded"
            />
        </div>
    );
};

export default Filter; 
