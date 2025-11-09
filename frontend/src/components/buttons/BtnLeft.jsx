export default function BtnLeft({onClick, children}) {
    return (
        <div className="flex justify-start">
            <button className="px-4 py-2 rounded bg-gray-300 text-white text-sm font-medium hover:bg-[#4B7F60] transition"
                  onClick={onClick} 
            >{children}</button>
        </div>
    )

}