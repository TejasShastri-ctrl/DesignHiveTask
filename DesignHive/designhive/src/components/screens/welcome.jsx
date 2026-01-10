const Welcome = () => {
    return (
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-700">
            <h2 className="text-4xl font-bold text-orange-100 uppercase tracking-widest">
                welcome Screen
            </h2>
            <p className="text-orange-200/80 text-xl">
                This is the next step in the flow.
            </p>
        </div>
    );
};

export default Welcome;