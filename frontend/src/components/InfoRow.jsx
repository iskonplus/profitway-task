export default function InfoRow({ label, value }) {
    return (
        <div className="flex justify-start items-center">
            <span className="text-sm text-gray-400 mr-1">
                {label}
            </span>
            <span className="font-semibold text-gray-900 text-sm">
                {value}
            </span>
        </div>
    );
}