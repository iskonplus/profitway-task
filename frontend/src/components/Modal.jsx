export default function Modal({ title, onClose, children }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
                className="absolute inset-0"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative z-10 bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-[#4B7F60]">{title}</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-xl leading-none"
                        aria-label="Close"
                    >
                        <span className="hover:text-red-600 transition">×</span>
                    </button>

                </div>

                {children}
                
            </div>
        </div>
    );
}