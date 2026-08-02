function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel
}) {

    if (!isOpen) return null;

    return (

        <div className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
        ">

            <div className="
                bg-[#141821]
                border
                border-[#2A3142]
                rounded-2xl
                p-8
                w-[420px]
                shadow-2xl
            ">

                <h2 className="text-2xl font-bold mb-3">

                    {title}

                </h2>

                <p className="text-slate-400 mb-8">

                    {message}

                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="
                            px-5
                            py-2
                            rounded-lg
                            border
                            border-[#2A3142]
                            hover:bg-[#1C2230]
                            transition
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                            px-5
                            py-2
                            rounded-lg
                            bg-red-500
                            hover:bg-red-600
                            transition
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmModal;